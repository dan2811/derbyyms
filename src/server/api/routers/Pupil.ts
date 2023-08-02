
import { createTRPCRouter, protectedProcedure, } from "../trpc";
import { z } from "zod";

const PupilRouter = createTRPCRouter({
    createMultiple: protectedProcedure.input(z.array(z.object({
        fName: z.string(),
        mName: z.string().optional(),
        lName: z.string(),
        dob: z.string(),
        addressLine1: z.string().optional(),
        addressLine2: z.string().optional(),
        postcode: z.string().optional(),
    }))).mutation(async ({ ctx, input }) => {
        console.log("input for pupil create: ", input);
        const promises = input.map(pupil => {
            return ctx.prisma.pupil.create({
                data: pupil
            });
        });
        const resolved = Promise.all(promises);
        console.log(resolved);
        return resolved;

    }),

    createAdultPupil: protectedProcedure.input(z.object({
        fName: z.string(),
        mName: z.string().optional(),
        lName: z.string(),
        dob: z.string(),
        phone: z.string().optional(),
        addressLine1: z.string().optional(),
        addressLine2: z.string().optional(),
        postcode: z.string().optional(),
    })).mutation(async ({ ctx, input }) => {
        console.log("input for pupil create: ", input);
        ctx.session.user.id;
        return ctx.prisma.pupil.create({
            data: { ...input, email: ctx.session.user.email, User: { connect: { id: ctx.session.user.id } } }
        });

    }),
});

export default PupilRouter;