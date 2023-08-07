import { createTRPCRouter } from "~/server/api/trpc";
import PupilRouter from "./routers/Pupil";
import InstrumentRouter from "./routers/Instrument";
import UserRouter from "./routers/User";
import TasterRouter from "./routers/Taster";
import CourseRouter from "./routers/Course";
import DayRouter from "./routers/Day";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pupil: PupilRouter,
  instrument: InstrumentRouter,
  user: UserRouter,
  taster: TasterRouter,
  course: CourseRouter,
  day: DayRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
