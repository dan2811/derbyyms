import { type Prisma, type PrismaClient } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { type DefaultArgs } from "@prisma/client/runtime/library";
import { type Session } from "next-auth";

const CourseRouter = createTRPCRouter({
    getAllPublic: publicProcedure.query(({ ctx }: {
        ctx: {
            session: Session | null;
            prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
        };
    }) => {
        return ctx.prisma.course.findMany({
            where: {
                isPublic: true
            }
        });
    })
});

export default CourseRouter;