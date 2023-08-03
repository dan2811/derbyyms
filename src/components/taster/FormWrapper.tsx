import React, { type PropsWithChildren } from "react";

const FormWrapper = (props: PropsWithChildren) => {
  return (
    <div className="mb-12 flex max-w-md flex-col justify-evenly rounded-md bg-violet-100 p-6 shadow-md">
      {props.children}
    </div>
  );
};

export default FormWrapper;
