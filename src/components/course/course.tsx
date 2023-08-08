import { Course } from "@prisma/client";
import React from "react";

const Course = ({ data }: { data: Course }) => {
  const {
    name,
    description,
    lessonLength,
    minAge,
    maxAge,
    maxClassSize,
    privateLessonsAvailable,
  } = data;
  return (
    <div
      className="w-1/2 rounded-md bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 
    via-50% to-violet-900/80
    to-90% p-6 text-slate-300 backdrop-blur backdrop-filter"
    >
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{lessonLength}</p>
      <p>The minumum age for this course is: {minAge}</p>
      <p>The max class size for this course is: {maxClassSize}</p>
      {/* Make some kind of subtle pulsing dot appear on the line below so that people can clikc on it and be taken to the taster form - see tailwind/mui docs*/}
      <p>
        {privateLessonsAvailable
          ? "Class and private lessons available."
          : "Class lessons available."}
      </p>
    </div>
  );
};

export default Course;
