import React from "react";
import { toast } from "react-hot-toast";
import { Footer } from "~/components/Footer";
import { api } from "~/utils/api";

const TasterForm = () => {
  const { mutate, isLoading, isError, failureReason } =
    api.pupil.create.useMutation();
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form data: ", e);
    mutate(
      {
        fName: "test",
        lName: "test",
        dob: new Date().toISOString(),
        mName: "test",
      },
      {
        onSuccess: (data) => {
          toast.success(`Success`);
        },
        onError: (data) => {
          console.error(data);
          toast.error(`Error: ${data.message}`);
        },
      }
    );
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex h-screen w-full justify-center">
      <form
        onSubmit={submitForm}
        className="flex max-w-md flex-col justify-evenly bg-violet-100 p-6 shadow-md"
      >
        <input
          type="text"
          name="fName"
          placeholder="First Name"
          className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          required
        />
        <input
          type="text"
          name="mName"
          placeholder="Middle Name(s)"
          className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
        />
        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          required
        />
        <div className="flex flex-col">
          <label htmlFor="dob" className="mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          required
        />
        <div className="flex flex-col">
          <label htmlFor="instrument" className="mb-2">
            Instrument
          </label>
          <select
            name="instrument"
            placeholder="Instrument"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          >
            <option>Piano</option>
            <option>Keyboard</option>
            <option>Drums</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="extraInfo" className="mb-2">
            Do you have any previous experience, or is there anything else we
            should know?
          </label>
          <textarea
            name="extraInfo"
            placeholder="Extra Info"
            className="h-32 w-full resize-none rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

const Taster = () => {
  return (
    <div>
      <TasterForm />
    </div>
  );
};

export default Taster;
