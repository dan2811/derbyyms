import Image from "next/image";
import React from "react";
import courses from "../../assets/courses.png";
import { api } from "~/utils/api";
import { CircularProgress } from "@mui/material";
import Course from "~/components/course/course";

const index = () => {
  const { data, isLoading } = api.course.getAllPublic.useQuery();

  if (isLoading) return <CircularProgress />;
  return (
    <div className="bg-violet-300">
      <Image src={courses} alt="courses" className="" />
      {data?.map((course) => (
        <Course data={course} key={course.name} />
      ))}
    </div>
  );
};

export default index;
