
import { createTRPCRouter, protectedProcedure, publicProcedure, } from "../trpc";
import { z } from "zod";

const PupilRouter = createTRPCRouter({
    create: protectedProcedure.input(z.object({
        fName: z.string(),
        mName: z.string().optional(),
        lName: z.string(),
        dob: z.string(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        addressLine1: z.string().optional(),
        addressLine2: z.string().optional(),
        postcode: z.string().optional(),
    })).mutation(({ ctx, input }) => {
        return ctx.prisma.pupil.create({
            data: {
                fName: input.fName,
                mName: input.mName,
                lName: input.lName,
                dob: input.dob,
                email: input.email,
                phone: input.phone,
                addressLine1: input.addressLine1,
            }
        });
    }),
});

export default PupilRouter;