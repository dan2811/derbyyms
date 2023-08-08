import { createTRPCRouter, publicProcedure, } from "../trpc";

const LessonTypeRouter = createTRPCRouter({
    getLessonPrices: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.lessonType.findMany({
            select: {
                price: true,
                name: true
            },
        });
    }),
});

export default LessonTypeRouter;