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
    <div className="flex flex-col md:flex-row">
      <div className="flex min-w-fit flex-grow flex-col bg-blue-100 bg-primary/80">
        <h1 className="font">{name}</h1>
        <p>{description}</p>
        <p>{lessonLength}</p>
        <p>
          Ages {minAge} - {maxAge}
        </p>
        {maxClassSize > 2 && (
          <p>The max class size for this course is: {maxClassSize}</p>
        )}
        {/* Make some kind of subtle pulsing dot appear on the line below so that people can clikc on it and be taken to the taster form - see tailwind/mui docs*/}
        <p>
          {maxClassSize > 2
            ? privateLessonsAvailable
              ? "Class and private lessons available."
              : "Class lessons available."
            : "Private lessons available."}
        </p>
      </div>
      <Youtube embedId={youtubeVideoId} />
    </div>
  );
};

export default Course;
