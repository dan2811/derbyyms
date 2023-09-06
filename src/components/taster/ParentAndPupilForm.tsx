import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import { api } from "~/utils/api";
import { z } from "zod";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

interface Instrument {
  name: string;
  id: string;
}

const ParentAndPupilForm = ({ instruments }: { instruments: Instrument[] }) => {
  const { data: userData, isSuccess: isUserRetrieved } =
    api.user.getCurrent.useQuery();

  if (!isUserRetrieved)
    return (
      <div className="flex w-full place-content-center">
        <CircularProgress sx={{ color: "#9760f2" }} />
      </div>
    );

  if (!userData)
    return (
      <div className="flex w-full max-w-md place-content-center rounded-md bg-red-200 p-6 shadow-md">
        Something went wrong, please make sure you are logged in.
      </div>
    );

  return Object.hasOwn(userData, "Pupil") && userData.Pupil !== null ? (
    <ExistingParentAndPupilForm instruments={instruments} />
  ) : (
    <NewParentAndPupilForm instruments={instruments} />
  );
};

const NewParentAndPupilForm = ({
  instruments,
}: {
  instruments: Instrument[];
}) => {
  const formSchema = z.object({
    instrument: z.string(),
    otherInfo: z.string(),
    pupil: z.object({
      fName: z.string(),
      mName: z.string().optional(),
      lName: z.string(),
      dob: z.string(),
      extraNeeds: z.string().optional(),
    }),
    parent: z.object({
      fName: z.string(),
      mName: z.string().optional(),
      lName: z.string(),
      dob: z.string(),
      phone: z.string(),
      addressLine1: z.string(),
      addressLine2: z.string().optional(),
      postcode: z.string(),
    }),
  });

  type TFormSchema = z.infer<typeof formSchema>;
  type PupilFormData = TFormSchema["pupil"];
  type ParentFormData = TFormSchema["parent"];
  type TasterFormData = Omit<TFormSchema, "pupil" | "parent">;

  const [pupilFormData, setPupilFormData] = useState<PupilFormData>({
    fName: "",
    mName: "",
    lName: "",
    dob: "",
  });

  const [tasterFormData, setTasterFormData] = useState<TasterFormData>({
    instrument: instruments[0]?.name ?? "",
    otherInfo: "",
  });

  const [parentFormData, setParentFormData] = useState<ParentFormData>({
    fName: "",
    mName: "",
    lName: "",
    dob: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    postcode: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setParentFormData({
      ...parentFormData,
      dob: new Date(parentFormData.dob).toISOString(),
    });

    setPupilFormData({
      ...pupilFormData,
      dob: new Date(pupilFormData.dob).toISOString(),
    });

    const formData = {
      ...tasterFormData,
      pupil: pupilFormData,
      parent: parentFormData,
    };

    const zResult = formSchema.safeParse(formData);
    if (zResult.success) {
      return mutate(formData);
    }
    console.log("error", zResult.error.formErrors);
  };

  const router = useRouter();
  const { mutate, isLoading: isSubmitting } =
    api.taster.createTasterForNewChildPupil.useMutation({
      onSuccess: () => router.push("/taster/success"),
    });

  if (isSubmitting) return <CircularProgress />;

  const onPupilFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPupilFormData({ ...pupilFormData, [e.target.name]: e.target.value });
  };

  const onParentFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParentFormData({ ...parentFormData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
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
              onChange={onParentFieldChange}
              autoFocus
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
              onChange={onParentFieldChange}
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
              onChange={onParentFieldChange}
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
              onChange={onParentFieldChange}
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
              onChange={onParentFieldChange}
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
              onChange={onParentFieldChange}
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
              onChange={onParentFieldChange}
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
              onChange={onParentFieldChange}
              required
            />
          </div>
        </FormWrapper>

        <FormWrapper>
          <h2 className="pb-4 text-2xl	font-bold transition-colors duration-1000">
            Pupil information
          </h2>
          <div className="flex flex-col">
            <label htmlFor="fName" className="mb-2">
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
              onChange={onPupilFieldChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mName" className="mb-2">
              Middle Name(s)
            </label>
            <input
              type="text"
              name="mName"
              id="mName"
              className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
              onChange={onPupilFieldChange}
              required
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
              onChange={onPupilFieldChange}
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
              onChange={onPupilFieldChange}
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
              value={tasterFormData.instrument}
              onChange={(e) =>
                setTasterFormData({
                  ...tasterFormData,
                  instrument: e.target.value,
                })
              }
              required
            >
              {instruments.map((instrument) => (
                <option key={instrument.id} value={instrument.id}>
                  {instrument.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="otherInfo" className="mb-2">
              Does the pupil have any previous experience, or is there anything
              else we should know?
            </label>
            <textarea
              name="otherInfo"
              id="otherInfo"
              className="h-32 w-full resize-none rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
              onChange={(e) =>
                setTasterFormData({
                  ...tasterFormData,
                  otherInfo: e.target.value,
                })
              }
            />
          </div>
          {isSubmitting ? (
            <CircularProgress />
          ) : (
            <button
              type="submit"
              className="m-6 rounded-full bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 
            via-50% to-violet-900/80 to-90% p-2 pl-5 pr-5 text-slate-100"
            >
              Submit
            </button>
          )}
        </FormWrapper>
      </form>
    </>
  );
};

const ExistingParentAndPupilForm = ({
  instruments,
}: {
  instruments: Instrument[];
}) => {
  const formSchema = z.object({
    fName: z.string(),
    mName: z.string(),
    lName: z.string(),
    dob: z.string(),
    instrument: z.string(),
    otherInfo: z.string(),
  });

  const [formData, setFormData] = useState<z.infer<typeof formSchema>>({
    fName: "",
    mName: "",
    lName: "",
    dob: "",
    instrument: instruments[0]?.name ?? "",
    otherInfo: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setFormData({ ...formData, dob: new Date(formData.dob).toISOString() });
    e.preventDefault();
    const zResult = formSchema.safeParse(formData);
    if (zResult.success) {
      return mutate(formData);
    }
    console.log("error", zResult.error.formErrors);
  };

  const router = useRouter();
  const { mutate, isLoading: isSubmitting } =
    api.taster.createTasterForChildOfExistingAdultPupil.useMutation({
      onSuccess: () => router.push("/taster/success"),
    });

  if (isSubmitting) return <CircularProgress />;

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
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
            onChange={onFieldChange}
            autoFocus
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
          <label htmlFor="instrument" className="mb-2">
            Instrument
          </label>
          <select
            name="instrument"
            id="instrument"
            className="rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            value={formData.instrument}
            onChange={(e) =>
              setFormData({ ...formData, instrument: e.target.value })
            }
            required
          >
            {instruments.map((instrument) => (
              <option key={instrument.id} value={instrument.id}>
                {instrument.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="otherInfo" className="mb-2">
            Does the pupil have any previous experience, or is there anything
            else we should know?
          </label>
          <textarea
            name="otherInfo"
            id="otherInfo"
            className="h-32 w-full resize-none rounded-md border-b-8 p-2 outline-none focus:border-violet-500"
            onChange={(e) =>
              setFormData({ ...formData, otherInfo: e.target.value })
            }
          />
        </div>
        {isSubmitting ? (
          <CircularProgress />
        ) : (
          <button
            type="submit"
            className="m-6 rounded-full bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 
        via-50% to-violet-900/80 to-90% p-2 pl-5 pr-5 text-slate-100"
          >
            Submit
          </button>
        )}
      </FormWrapper>
    </form>
  );
};
export default ParentAndPupilForm;
