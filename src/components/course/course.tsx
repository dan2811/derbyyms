import { Course } from "@prisma/client";
import React from "react";

const Course = ({ data }: { data: Course }) => {
  const { name, description, lessonLength } = data;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{lessonLength}</p>
    </div>
  );
};

export default Course;
