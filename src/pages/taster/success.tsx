import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import FormWrapper from "~/components/taster/FormWrapper";

const Success = () => {
  return (
    <div className="flex w-full content-center justify-center p-6">
      <FormWrapper>
        <div className="flex flex-col place-items-center">
          <h1>Enquiry submitted</h1>

          <div className="flex w-fit flex-col">
            <AiOutlineCheck size={50} width={0} />
          </div>
        </div>
      </FormWrapper>
    </div>
  );
};

export default Success;
