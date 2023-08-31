/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { type protectedProcedure } from './trpc';

type ProtectedProcedure = typeof protectedProcedure;

export function createReactAdminRoutes(key: string, procedure: ProtectedProcedure) {
    return ({
        create: procedure.input(
            z.record(z.string().or(z.number()).or(z.boolean()))
        )
            .mutation(async ({ ctx, input }: any) => {
                const record = await ctx.prisma[key].create({
                    data: input,
                });
                return record;
            }),
        getMany: procedure.input(z.object({
            select: z.array(z.string()).min(1).optional()
        }))
            .query(({ ctx, input }: any) => {
                console.log("MADE IT TO THE GET MANY");
                /**
                 * For pagination you can have a look at this docs site
                 * @link https://trpc.io/docs/useInfiniteQuery
                 */
                return ctx.prisma[key].findMany({
                    select: input.select
                        ? input.select.reduce(
                            (prev: Record<string, boolean>, cur: string) => ({
                                ...prev,
                                [cur]: true,
                            }),
                            {}
                        )
                        : undefined,
                });
            }),
        getOne: procedure.input(
            z.object({
                id: z.string().min(1).or(z.number().min(1)),
                select: z.array(z.string()).min(1).optional(),
            })).query(async ({ ctx, input }: any) => {
                const record = await ctx.prisma[key].findUnique({
                    where: { id: input.id },
                    select: input.select
                        ? input.select.reduce(
                            (prev: Record<string, boolean>, cur: string) => ({
                                ...prev,
                                [cur]: true,
                            }),
                            {}
                        )
                        : undefined,
                });
                if (!record) {
                    throw new TRPCError({
                        code: 'NOT_FOUND',
                        message: `No ${key} with id '${input}'`,
                    });
                }
                return { data: record };
            }),
        // update: procedure.mutation('update', {
        //     input: z.object({
        //         id: z.string().min(1).or(z.number().min(1)),
        //         data: z.record(z.string().or(z.number()).or(z.boolean())),
        //     }),
        //     async resolve({ ctx, input }: any) {
        //         const { id, data } = input;
        //         const record = await ctx.prisma[key].update({
        //             where: { id },
        //             data,
        //         });
        //         return record;
        //     },
        // }),
        // delete: procedure.mutation('delete', {
        //     input: z.string().min(1).or(z.number().min(1)),
        //     async resolve({ input: id, ctx }: any) {
        //         await ctx.prisma[key].delete({ where: { id } });
        //         return { data: id };
        //     },
        // });
    });
}
