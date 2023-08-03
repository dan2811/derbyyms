import React, { type ChangeEvent, useEffect, useState } from "react";
import FormWrapper from "./FormWrapper";
import { api } from "~/utils/api";
import { z } from "zod";

interface Instrument {
  name: string;
  id: string;
}

const AdultPupilForm = ({ instruments }: { instruments: Instrument[] }) => {
  const { data: userData } = api.user.getCurrent.useQuery();

  const [pupilAlreadyCreated, setPupilAlreadyCreated] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    if (userData?.Pupil !== undefined && Array.isArray(userData?.Pupil)) {
      setPupilAlreadyCreated(userData?.Pupil.length > 0);
    }
  }, [userData?.Pupil]);

  return pupilAlreadyCreated ? (
    <ExistingAdultPupilForm instruments={instruments} />
  ) : (
    <NewAdultPupilForm instruments={instruments} />
  );
};

const ExistingAdultPupilForm = ({
  instruments,
}: {
  instruments: Instrument[];
}) => {
  const formSchema = z.object({
    instrument: z.string(),
    otherInfo: z.string(),
  });

  const [formData, setFormData] = useState<z.infer<typeof formSchema>>({
    instrument: instruments[0]?.name ?? "",
    otherInfo: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const zResult = formSchema.safeParse(formData);
    if (zResult.success) {
      return mutate(formData);
    }
    console.log("error", zResult.error.formErrors);
  };

  const { mutate, isLoading: isSubmitting } = api.taster.create.useMutation();
  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="instrument" className="mb-2">
              Instrument
            </label>
            <select
              name="instrument"
              id="instrument"
              className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
              onChange={(e) =>
                setFormData({ ...formData, instrument: e.target.value })
              }
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
              onChange={(event) =>
                setFormData({
                  ...formData,
                  otherInfo: event.target.value,
                })
              }
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="m-6 rounded-full bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 
            via-50% to-violet-900/80 to-90% p-2 pl-5 pr-5 text-slate-100"
          >
            Submit
          </button>
        </form>
      </FormWrapper>
    </>
  );
};

const NewAdultPupilForm = ({ instruments }: { instruments: Instrument[] }) => {
  const formSchema = z.object({
    fName: z.string(),
    mName: z.string(),
    lName: z.string(),
    dob: z.string(),
    phone: z.string(),
    addressLine1: z.string(),
    addressLine2: z.string(),
    postcode: z.string(),
    instrument: z.string(),
    extraInfo: z.string(),
  });

  const [formData, setFormData] = useState<z.infer<typeof formSchema>>({
    fName: "",
    mName: "",
    lName: "",
    dob: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    postcode: "",
    instrument: instruments[0]?.name ?? "",
    extraInfo: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.dob = new Date(formData.dob).toISOString();
    const zResult = formSchema.safeParse(formData);
    if (zResult.success) {
      return mutate(formData);
    }
    console.log("error", zResult.error.formErrors);
  };

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: (typeof formData)[keyof typeof formData] = event.target.value;
    setFormData({ ...formData, [event.target.id]: value });
  };

  const { mutate, isLoading: isSubmitting } =
    api.user.createAdultPupilTaster.useMutation();
  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <h2 className="pb-4	text-2xl font-bold">Your information</h2>
          <div className="flex flex-col">
            <label htmlFor="fName" className="mb-2">
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
              required
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
              onChange={(event) =>
                setFormData({
                  ...formData,
                  instrument: event.target.value,
                })
              }
              value={formData.instrument}
              required
            >
              <option disabled>Choose instrument...</option>
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
              onChange={(event) =>
                setFormData({
                  ...formData,
                  extraInfo: event.target.value,
                })
              }
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="m-6 rounded-full bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 
            via-50% to-violet-900/80 to-90% p-2 pl-5 pr-5 text-slate-100"
          >
            Submit
          </button>
        </form>
      </FormWrapper>
    </>
  );
};

export default AdultPupilForm;
