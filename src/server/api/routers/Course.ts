import { createTRPCRouter, publicProcedure } from "../trpc";

const CourseRouter = createTRPCRouter({
    getAllPublic: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.course.findMany({
            where: {
                isPublic: true
            }
        });
    })
});

export default CourseRouter;