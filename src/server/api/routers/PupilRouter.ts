
import { createTRPCRouter, protectedProcedure, publicProcedure, } from "../trpc";
import { z } from "zod";

const PupilRouter = createTRPCRouter({
    create: protectedProcedure.input(z.object({
        fName: z.string(),
        mName: z.string(),
        lName: z.string(),
        dob: z.string()
    })).mutation(async ({ ctx, input }) => {
        return await ctx.prisma.pupil.create({
            data: {
                fName: input.fName,
                mName: input.mName,
                lName: input.lName,
                dob: input.dob
            }
        });
    }),
});

export default PupilRouter;

export const exampleRouter = createTRPCRouter({
    hello: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.example.findMany();
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),
});