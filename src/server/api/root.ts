import { createTRPCRouter } from "~/server/api/trpc";
import PupilRouter from "./routers/Pupil";
import InstrumentRouter from "./routers/Instrument";
import ParentRouter from "./routers/Parent";
import UserRouter from "./routers/User";
import TasterRouter from "./routers/Taster";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pupil: PupilRouter,
  parent: ParentRouter,
  instrument: InstrumentRouter,
  user: UserRouter,
  taster: TasterRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
