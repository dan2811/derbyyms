/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createReactAdminRoutes } from "../ra-route-generator";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const UserRouter = createTRPCRouter({
    ...createReactAdminRoutes('user', protectedProcedure),
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