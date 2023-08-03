import React from "react";
import FormWrapper from "./FormWrapper";

interface Instrument {
  name: string;
  id: string;
}

const ParentAndPupilForm = ({ instruments }: { instruments: Instrument[] }) => {
  // TODO
  // steal logic from adultPupilForm.tsx to check if user is already a pupil.
  // If they are, they may need promoting to a parent.
  // If they already are a parent and they have an existing pupil, we can just push this new one to the array.
  // Watch out for the case where they are a parent but don't have a pupil yet.
  // add submit button to form
  // should be able to remove some un needed fields from the pupil info part of this form
  return (
    <>
      <FormWrapper>
        <h2 className="pb-4 text-2xl	font-bold transition-colors duration-1000">
          Your information
        </h2>
        <div className="flex flex-col">
          <label htmlFor="fName" className="mb-2">
            First Name
          </label>
          <input
            autoFocus
            type="text"
            name="fName"
            id="fName"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="ParentLName" className="mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lName"
            id="lName"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="addressLine1" className="mb-2">
            Address line 1
          </label>
          <input
            type="text"
            name="addressLine1"
            id="addressLine1"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="addressLine2" className="mb-2">
            Address line 2
          </label>
          <input
            type="text"
            name="addressLine2"
            id="addressLine2"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="postcode" className="mb-2">
            Postcode
          </label>
          <input
            type="text"
            name="postcode"
            id="postcode"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>
      </FormWrapper>
      <FormWrapper>
        <h2 className="pb-4	text-2xl font-bold">Pupil information</h2>
        <div className="flex flex-col">
          <label htmlFor="fName" className="mb-2">
            First Name
          </label>
          <input
            type="text"
            name="fName"
            id="fName"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="mName" className="mb-2">
            Middle Name
          </label>
          <input
            type="text"
            name="mName"
            id="mName"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lName" className="mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lName"
            id="lName"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="dob" className="mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="addressLine1" className="mb-2">
            Address line 1
          </label>
          <input
            type="text"
            name="addressLine1"
            id="addressLine1"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="addressLine2" className="mb-2">
            Address line 2
          </label>
          <input
            type="text"
            name="addressLine2"
            id="addressLine2"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="postcode" className="mb-2">
            Postcode
          </label>
          <input
            type="text"
            name="postcode"
            id="postcode"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="instrument" className="mb-2">
            Instrument
          </label>
          <select
            name="instrument"
            id="instrument"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            required
          >
            {instruments.map((instrument) => (
              <option key={instrument.id} value={instrument.name}>
                {instrument.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="extraInfo" className="mb-2">
            Do you have any previous experience, or is there anything else we
            should know?
          </label>
          <textarea
            name="extraInfo"
            id="extraInfo"
            className="h-32 w-full resize-none rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
          />
        </div>
      </FormWrapper>
    </>
  );
};

export default ParentAndPupilForm;
