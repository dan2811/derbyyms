/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
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
            closingTime: 1200,
          },
          {
            name: "Tuesday",
            openingTime: 960,
            closingTime: 1200,
          },
          {
            name: "Wednesday",
            openingTime: 960,
            closingTime: 1200,
          },
          {
            name: "Thursday",
            openingTime: 960,
            closingTime: 1200,
          },
          {
            name: "Friday",
            openingTime: 960,
            closingTime: 1200,
          },
          {
            name: "Saturday",
            openingTime: 960,
            closingTime: 1200,
          },
          {
            name: "Sunday",
            openingTime: 960,
            closingTime: 1200,
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
  async seedPupils() {
    try {
      await this.prisma.pupil.createMany({
        data: [
          {
            fName: "John",
            mName: "Doe",
            lName: "Smith",
            email: "test@derbyyms.co.uk",
            phone: "01234567890",
            dob: new Date('1990-01-01').toISOString(),
            addressLine1: "1 Test Street",
            addressLine2: "Test Town",
          },
          {
            fName: "Jane",
            mName: "Doe",
            lName: "Smith",
            email: "test1@derbyyms.co.uk",
            phone: "01234567890",
            dob: new Date("1990-01-01").toISOString(),
            addressLine1: "1 Test Street",
            addressLine2: "Test Town",
          }
        ]
      });
      console.log("PUPILS SEED SUCCESS");
    } catch (e) {
      console.error("FAILED TO SEED PUPILS: ", e);
    }
  }
  async seedInstruments() { 
    try {
      return await this.prisma.instrument.createMany({
        data: [
          { name: "Drums" },
          { name: "Guitar" },
          { name: "Piano" },
          { name: "Vocal" },
          { name: "Bass" },
          { name: "Keyboard" },
        ]
      })
    } catch (e) {
      console.error("FAILED TO SEED INSTRUMENTS: ", e);
    }
  }
  async seedGrades() {
    const instruments = await this.prisma.instrument.findMany({
      select: {
        id: true,
        name: true
      }
    });
    
    instruments.forEach(async ({ id, name }) => {
        try { 
        if (name === "Keyboard") {
          await this.prisma.grade.createMany({
            data: [
              { level: 1, examBoard: "Trinity", instrumentId: id },
              { level: 2, examBoard: "Trinity", instrumentId: id },
              { level: 3, examBoard: "Trinity", instrumentId: id },
              { level: 4, examBoard: "Trinity", instrumentId: id },
              { level: 5, examBoard: "Trinity", instrumentId: id },
              { level: 6, examBoard: "Trinity", instrumentId: id },
              { level: 7, examBoard: "Trinity", instrumentId: id },
              { level: 8, examBoard: "Trinity", instrumentId: id },
            ]
          });
          return;
        }
        await this.prisma.grade.createMany({
          data: [
            { level: 1, examBoard: "Rockschool", instrumentId: id },
            { level: 2, examBoard: "Rockschool", instrumentId: id },
            { level: 3, examBoard: "Rockschool", instrumentId: id },
            { level: 4, examBoard: "Rockschool", instrumentId: id },
            { level: 5, examBoard: "Rockschool", instrumentId: id },
            { level: 6, examBoard: "Rockschool", instrumentId: id },
            { level: 7, examBoard: "Rockschool", instrumentId: id },
            { level: 8, examBoard: "Rockschool", instrumentId: id },
          ]
        });
      } catch (e) {
        console.error(`FAILED TO SEED GRADES FOR: ${name}`, e)
      }
      });
  }
  async seedRooms() { 
    try {
      const instruments = await this.prisma.instrument.findMany({
        select: {
          id: true,
          name: true
        }
      });
      
      await this.prisma.room.createMany({
        data: [
          { name: "Guitar 1", pupilCapacity: 8, instruments: { connect: [{ id: instruments.find(({name}) => name === "Guitar").id }] } },
          { name: "Keyboard 1", pupilCapacity: 8 },
          { name: "Keyboard 2", pupilCapacity: 8 },
          { name: "Drum 1", pupilCapacity: 8 },
          { name: "Vocal 1", pupilCapacity: 8 },
          { name: "Private 1", pupilCapacity: 8 },
        ]
      });
    } catch (e) {
      console.error("FAILED TO SEED ROOMS: ", e);
    }
  }
  async seedTeachers() { 
    try {
      await this.prisma.teacher.createMany({
        data: [
          { fName: "David", lName: "Amar", email: "david-test@derbyyms.co.uk", phone: "01234567890" },
          { fName: "Gail", lName: "Braithwaite", email: "gail-test@derbyyms.co.uk", phone: "01234567890" },
        ]
      });
    } catch (e) {
      console.error("FAILED TO SEED TEACHERS: ", e);
    }
  }
};

try {
  const db = new dbSeeder();
  await db.seedDays();
  await db.seedCourses();
  await db.seedLessonTypes();
  await db.seedPupils();
  await db.seedInstruments();
  await db.seedGrades();
  await db.seedRooms();
  await db.seedTeachers();
} catch (e) {
  console.log("FAILED TO COMPLETE SEED: ", e);
}
