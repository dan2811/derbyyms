
import { createTRPCRouter, protectedProcedure, } from "../trpc";
import { z } from "zod";

const ParentRouter = createTRPCRouter({
    create: protectedProcedure.input(z.object({
        fName: z.string(),
        lName: z.string(),
        phone: z.string(),
        addressLine1: z.string(),
        addressLine2: z.string(),
        postcode: z.string(),
        pupilIds: z.array(z.string()),
    })).mutation(({ ctx, input }) => {
        return ctx.prisma.parent.create({
            data: {
                fName: input.fName,
                lName: input.lName,
                email: ctx.session.user.email ?? "",
                phone: input.phone,
                addressLine1: input.addressLine1,
                addressLine2: input.addressLine2,
                postcode: input.postcode,
                Pupil: {
                    connect: input.pupilIds.map(id => {
                        return {
                            id: id
                        };
                    })
                }
            }
        });
    }),
});

export default ParentRouter;