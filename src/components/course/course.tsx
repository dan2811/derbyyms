import { Course } from "@prisma/client";
import React from "react";
import Youtube from "../Youtube";

const Course = ({ data }: { data: Course }) => {
  const {
    name,
    description,
    lessonLength,
    minAge,
    maxAge,
    maxClassSize,
    privateLessonsAvailable,
    youtubeVideoId,
  } = data;
  return (
    <div className="bg-blue-100">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{lessonLength}</p>
      <p>
        Ages {minAge} - {maxAge}
      </p>
      <p>The max class size for this course is: {maxClassSize}</p>
      {/* Make some kind of subtle pulsing dot appear on the line below so that people can clikc on it and be taken to the taster form - see tailwind/mui docs*/}
      <p>
        {privateLessonsAvailable
          ? "Class and private lessons available."
          : "Class lessons available."}
      </p>
      <Youtube embedId={youtubeVideoId} />
    </div>
  );
};

export default Course;
