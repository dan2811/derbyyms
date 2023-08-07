import { Course } from "@prisma/client";
import React from "react";

const Course = ({ data }: { data: Course }) => {
  const { name, description, lessonLength } = data;
  return (
    <div
      className="w-1/2 rounded-md bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 
    via-50% to-violet-900/80
    to-90% p-6 text-slate-300 backdrop-blur backdrop-filter"
    >
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{lessonLength}</p>
    </div>
  );
};

export default Course;
