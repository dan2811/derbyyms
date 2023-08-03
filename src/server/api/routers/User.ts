
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, } from "../trpc";

const UserRouter = createTRPCRouter({
    getCurrent: protectedProcedure.query(async ({ ctx }) => {
        return ctx.prisma.user.findUnique({
            where: {
                id: ctx.session.user.id
            },
            select: {
                Pupil: true
            }
        });
    }),
    createAdultPupilTaster: protectedProcedure.input(z.object({
        fName: z.string(),
        mName: z.string().optional(),
        lName: z.string(),
        dob: z.string(),
        phone: z.string(),
        extraNeeds: z.string().optional(),
        addressLine1: z.string(),
        addressLine2: z.string().optional(),
        postcode: z.string(),
        instrument: z.string(),
    })).mutation(async ({ ctx, input }) => {
        const { Pupil, TasterEnquiry } = await ctx.prisma.user.update({
            where: {
                id: ctx.session.user.id
            },
            data: {
                Pupil: {
                    create: {
                        fName: input.fName,
                        mName: input.mName ?? "",
                        lName: input.lName,
                        dob: input.dob,
                        email: ctx.session.user.email,
                        phone: input.phone,
                        extraNeeds: input.extraNeeds ?? "",
                        addressLine1: input.addressLine1,
                        addressLine2: input.addressLine2 ?? "",
                        postcode: input.postcode,
                    }
                },
                TasterEnquiry: {
                    create: {
                        instrument: input.instrument,
                        otherInfo: input.extraNeeds ?? "",
                    }
                }
            },
            include: {
                Pupil: true,
                TasterEnquiry: true
            }
        });
    })
});

export default UserRouter;