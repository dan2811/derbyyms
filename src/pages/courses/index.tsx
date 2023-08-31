import Image from "next/image";
import React from "react";
import courses from "../../assets/courses.png";
import { api } from "~/utils/api";
import { CircularProgress } from "@mui/material";
import Course from "~/components/course/course";
import { Layout } from "~/components/Layout";

const index = () => {
  const { data, isLoading } = api.course.getAllPublic.useQuery();

  if (isLoading) return <CircularProgress />;
  return (
    <Layout>
      <div className="flex flex-col gap-2 bg-background">
        <Image src={courses} alt="courses" className="" priority />
        {data?.map((course) => (
          <Course data={course} key={course.name} />
        ))}
      </div>
    </Layout>
  );
};

export default index;
