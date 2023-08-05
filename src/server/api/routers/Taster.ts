import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

const TasterRouter = createTRPCRouter({
    createTasterForExistingAdultPupil: protectedProcedure.input(z.object({
        instrument: z.string(),
        otherInfo: z.string()
    }))
        .mutation(async ({ ctx, input }) => {
            const user = await ctx.prisma.user.findUnique({
                where: {
                    id: ctx.session.user.id
                },
                include: {
                    Pupil: true
                }
            });

            if (!user?.Pupil && !user?.Pupil?.id) {
                throw new Error("No pupil record found for the parent.");
            };
            return ctx.prisma.tasterEnquiry.create({
                data: {
                    instrument: input.instrument,
                    User: {
                        connect: {
                            id: ctx.session.user.id
                        }
                    },
                    otherInfo: input.otherInfo,
                    pupil: {
                        connect: {
                            id: user.Pupil.id
                        }
                    },
                },
            });
        }),
    createTasterForChildOfExistingAdultPupil: protectedProcedure.input(z.object({
        instrument: z.string(),
        otherInfo: z.string(),
        fName: z.string(),
        mName: z.string().optional(),
        lName: z.string(),
        dob: z.string(),
        extraNeeds: z.string().optional(),
    }))
        .mutation(async ({ ctx, input }) => {
            const parent = await ctx.prisma.pupil.findUnique({
                where: {
                    userId: ctx.session.user.id,
                    email: ctx.session.user.email ?? undefined,
                }
            });
            if (!parent?.id) {
                throw new Error("No pupil record found for the parent.");
            }
            return ctx.prisma.tasterEnquiry.create({
                data: {
                    instrument: input.instrument,
                    otherInfo: input.otherInfo,
                    User: {
                        connect: {
                            id: ctx.session.user.id
                        }
                    },
                    pupil: {
                        create: {
                            fName: input.fName,
                            mName: input.mName ?? "",
                            lName: input.lName,
                            dob: input.dob,
                            extraNeeds: input.extraNeeds ?? "",
                            parent: {
                                connect: {
                                    id: parent?.id
                                }
                            }
                        }
                    }
                }
            });
        }),
    createTasterForNewAdultPupil: protectedProcedure.input(z.object({
        instrument: z.string(),
        otherInfo: z.string(),
        fName: z.string(),
        mName: z.string().optional(),
        lName: z.string(),
        dob: z.string(),
        phone: z.string(),
        addressLine1: z.string(),
        addressLine2: z.string().optional(),
        postcode: z.string(),
    }))
        .mutation(({ ctx, input }) => ctx.prisma.tasterEnquiry.create({
            data: {
                instrument: input.instrument,
                otherInfo: input.otherInfo,
                User: {
                    connect: {
                        id: ctx.session.user.id
                    }
                },
                pupil: {
                    create: {
                        fName: input.fName,
                        mName: input.mName ?? "",
                        lName: input.lName,
                        dob: input.dob,
                        phone: input.phone,
                        addressLine1: input.addressLine1,
                        addressLine2: input.addressLine2 ?? "",
                        postcode: input.postcode,
                        userId: ctx.session.user.id,
                    }
                }
            }
        })),
    createTasterForNewChildPupil: protectedProcedure.input(z.object({
        instrument: z.string(),
        otherInfo: z.string(),
        pupil: z.object({
            fName: z.string(),
            mName: z.string().optional(),
            lName: z.string(),
            dob: z.string(),
            extraNeeds: z.string().optional(),
        }),
        parent: z.object({
            fName: z.string(),
            mName: z.string().optional(),
            lName: z.string(),
            dob: z.string(),
            phone: z.string(),
            addressLine1: z.string(),
            addressLine2: z.string().optional(),
            postcode: z.string(),
        }),
    }))
        .mutation(async ({ ctx, input }) => {

            const pupil = await ctx.prisma.pupil.create({
                data: {
                    fName: input.pupil.fName,
                    mName: input.pupil.mName ?? "",
                    lName: input.pupil.lName,
                    dob: input.pupil.dob,
                    extraNeeds: input.pupil.extraNeeds ?? "",
                    parent: {
                        create: {
                            fName: input.parent.fName,
                            mName: input.parent.mName ?? "",
                            lName: input.parent.lName,
                            userId: ctx.session.user.id,
                            dob: input.parent.dob,
                            phone: input.parent.phone,
                            email: ctx.session.user.email ?? undefined,
                            addressLine1: input.parent.addressLine1,
                            addressLine2: input.parent.addressLine2 ?? "",
                            postcode: input.parent.postcode,
                        }
                    }
                }
            });

            return ctx.prisma.tasterEnquiry.create({
                data: {
                    instrument: input.instrument,
                    otherInfo: input.otherInfo,
                    User: {
                        connect: {
                            id: ctx.session.user.id
                        }
                    },
                    pupil: {
                        connect: {
                            id: pupil.id
                        }
                    }
                }
            });
        })
});
export default TasterRouter;