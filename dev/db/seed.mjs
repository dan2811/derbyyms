import { PrismaClient } from "@prisma/client";
import { env } from "../../src/env.mjs";

class dbSeeder {
  constructor() {
    if (process.env.NODE_ENV !== "development") {
      throw new Error("CANNOT SEED UNLESS NODE_ENV IS DEVELOPMENT");
    }
    const prisma = new PrismaClient({
      log:
        env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
    this.prisma = prisma;
  }
  async seedDays() {
    try {
      await this.prisma.day.createMany({
        data: [
          {
            name: "Monday",
            openingTime: 960,
            closingTime: 960,
          },
          {
            name: "Tuesday",
            openingTime: 960,
            closingTime: 960,
          },
          {
            name: "Wednesday",
            openingTime: 960,
            closingTime: 960,
          },
          {
            name: "Thursday",
            openingTime: 960,
            closingTime: 960,
          },
          {
            name: "Friday",
            openingTime: 960,
            closingTime: 960,
          },
          {
            name: "Saturday",
            openingTime: 960,
            closingTime: 960,
          },
          {
            name: "Sunday",
            openingTime: 960,
            closingTime: 960,
          },
        ],
      });
      console.log("DAYS SEED SUCCESS");
    } catch (e) {
      console.error("FAILED TO SEED DAYS: ", e);
    }
  }
  async seedCourses() {
    try {
      await this.prisma.course.createMany({
        data: [
          {
            name: "Drum Encounters",
            description: "Drums description here...",
            isPublic: true,
            privateLessonsAvailable: true,
            lessonLength: 60,
            maxAge: 99,
            minAge: 7,
            maxClassSize: 8,
          },
          {
            name: "Play for keeps",
            description: "Drums description here...",
            isPublic: true,
            privateLessonsAvailable: true,
            lessonLength: 60,
            maxAge: 99,
            minAge: 7,
            maxClassSize: 8,
          },
        ],
      });
      console.log("COURSES SEED SUCCESS");
    } catch (e) {
      console.error("FAILED TO SEED COURSES: ", e);
    }
  }
  async seedLessonTypes() {
    try {
      await this.prisma.lessonType.createMany({
        data: [
          {
            name: "class",
            description:
              "Groups of up to 8 students, allowing the patented Yamaha teaching methodology flourishes.",
            price: 46.42,
          },
          {
            name: "private",
            description:
              "One on one lessons with an expert teacher, at the top of their game.",
            price: 54.52,
          },
          {
            name: "semi-private",
            description:
              "Maybe you and a friend want to learn together? But you're not ready to join a class yet? Semi-private lessons are for you.",
            price: 46.42,
          },
        ],
      });
      console.log("LESSON TYPES SEED SUCCESS");
    } catch (e) {
      console.error("FAILED TO SEED LESSON TYPES: ", e);
    }
  }
}

try {
  const db = new dbSeeder();
  await db.seedDays();
  await db.seedCourses();
  await db.seedLessonTypes();
} catch (e) {
  console.log("FAILED TO COMPLETE SEED: ", e);
}
