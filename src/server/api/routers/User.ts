
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
});

export default UserRouter;