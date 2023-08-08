import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure, } from "../trpc";

const DayRouter = createTRPCRouter({
    setOpeningTime: protectedProcedure.input(z.object({
        name: z.string(),
        openingTime: z.number(),
        closingTime: z.number()
    })).mutation(({ input, ctx }) => {
        return ctx.prisma.day.update({
            where: {
                name: input.name
            },
            data: {
                openingTime: input.openingTime,
                closingTime: input.closingTime
            }
        });
    }),
    getOpeningTimes: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.day.findMany({
            select: {
                name: true,
                openingTime: true,
                closingTime: true,
            },
            orderBy: {
                id: "asc"
            }
        });
    }),
});

export default DayRouter;