import { createTRPCRouter, publicProcedure, } from "../trpc";
import { sortDaysOfWeek } from "../../../helpers/days";

const DayRouter = createTRPCRouter({
    getOpeningTimes: publicProcedure.query(async ({ ctx }) => {
        const days = await ctx.prisma.day.findMany({
            select: {
                name: true,
                openingTime: true,
                closingTime: true,
            }
        });
        return sortDaysOfWeek(days);
    }),
});

export default DayRouter;