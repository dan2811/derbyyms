import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

const TasterRouter = createTRPCRouter({
    create: protectedProcedure.input(z.object({ instrument: z.string(), otherInfo: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.tasterEnquiry.create({
                data: {
                    instrument: input.instrument,
                    User: {
                        connect: {
                            id: ctx.session.user.id
                        }
                    },
                    otherInfo: input.otherInfo,
                },
            });
        })
});
export default TasterRouter;