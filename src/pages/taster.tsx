import {
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import React, { type ChangeEvent, type FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { Footer } from "~/components/Footer";
import { api } from "~/utils/api";

interface ParentInfoProps {
  onParentFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  parentInfo: ParentInfoFields;
  setParentInfo: React.Dispatch<React.SetStateAction<ParentInfoFields>>;
}

const ParentInfo = ({
  onParentFieldChange,
  parentInfo,
  setParentInfo,
}: ParentInfoProps) => (
  <>
    <h2 className="pb-4	text-2xl font-bold">Your information</h2>
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
        onChange={onParentFieldChange}
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
        onChange={onParentFieldChange}
        required
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
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
        onChange={onParentFieldChange}
        required
      />
    </div>
  </>
);

interface PupilInfoProps {
  onFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setState: React.Dispatch<React.SetStateAction<PupilInfoFields>>;
  pupilInfoState: PupilInfoFields;
  tasterFor: "me" | "someone else";
}

const PupilInfo = ({
  onFieldChange,
  setState,
  pupilInfoState,
  tasterFor,
}: PupilInfoProps) => {
  const { data: instruments, status } =
    api.instrument.getAll.useQuery<{ id: string; name: string }[]>();

  if (status === "loading")
    return <CircularProgress sx={{ color: "#9760f2" }} />;
  if (status === "error") return <div>Error</div>;
  if (status === "success")
    return (
      <>
        <h2 className="pb-4	text-2xl font-bold">
          {tasterFor === "me" ? "Your" : "Pupil"} information
        </h2>
        <div className="flex flex-col">
          <label htmlFor="fName" className="mb-2">
            First Name
          </label>
          <input
            type="text"
            name="fName"
            id="fName"
            value={pupilInfoState.fName}
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
            onChange={(e) =>
              setState({
                ...pupilInfoState,
                dob: new Date(e.target.value).toISOString(),
              })
            }
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
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
            required={tasterFor === "me"}
            placeholder={tasterFor === "me" ? "" : "Not required"}
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
            placeholder={tasterFor === "me" ? "" : "Not required"}
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
            required={tasterFor === "me"}
            placeholder={tasterFor === "me" ? "" : "Not required"}
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
            onChange={(e) =>
              setState({ ...pupilInfoState, instrument: e.target.value })
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
            onChange={(e) =>
              setState({ ...pupilInfoState, extraInfo: e.target.value })
            }
          />
        </div>
      </>
    );
};

interface PupilInfoFields {
  fName: string;
  mName: string;
  lName: string;
  dob: string;
  email?: string;
  phone?: string;
  addressLine1: string;
  addressLine2: string;
  postcode: string;
  instrument: string;
  extraInfo: string;
}

interface ParentInfoFields {
  fName: string;
  lName: string;
  email: string;
  phone: string;
}

const TasterForm = () => {
  const session = useSession();
  const [pupilInfo, setPupilInfo] = useState<PupilInfoFields>({
    fName: "",
    mName: "",
    lName: "",
    dob: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    postcode: "",
    instrument: "",
    extraInfo: "",
  });

  const [tasterFor, setTasterFor] = useState<"me" | "someone else">(
    "someone else"
  );

  if (session.status === "unauthenticated") return signIn();

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: (typeof pupilInfo)[keyof typeof pupilInfo] =
      event.target.value;
    setPupilInfo({ ...pupilInfo, [event.target.id]: value });
    console.log(event.target.id, pupilInfo);
  };

  const { mutate, isLoading } = api.pupil.create.useMutation();

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form data: ", pupilInfo);
    mutate(pupilInfo, {
      onSuccess: (data) => {
        toast.success(`Success`);
      },
      onError: (data) => {
        console.error(data);
        toast.error(`Error: ${data.message}`);
      },
    });
  };

  if (isLoading)
    return (
      <div className="flex h-screen w-full justify-center md:mb-8 md:mt-8">
        <CircularProgress sx={{ color: "#9760f2" }} />
      </div>
    );

  return (
    <>
      <div className="flex h-fit w-full justify-center md:mb-8 md:mt-8">
        <div className="flex flex-col">
          <div className="mb-12 flex max-w-md flex-col justify-evenly rounded-md bg-violet-100 p-6 shadow-md">
            <label htmlFor="taster-for-who" className="pb-4	text-2xl font-bold">
              Taster lesson is for:
            </label>
            <RadioGroup
              defaultValue={tasterFor}
              value={tasterFor}
              name="taster-for-who"
              onChange={(e) =>
                setTasterFor(e.target.value as "me" | "someone else")
              }
              className="ml-10"
            >
              <FormControlLabel
                value="someone else"
                control={
                  <Radio
                    sx={{
                      color: "#9760f2",
                      "&.Mui-checked": {
                        color: "#9760f2",
                      },
                    }}
                  />
                }
                label="Someone else"
              />
              <FormControlLabel
                value="me"
                control={
                  <Radio
                    sx={{
                      color: "#9760f2",
                      "&.Mui-checked": {
                        color: "#9760f2",
                      },
                    }}
                  />
                }
                label="Me"
              />
            </RadioGroup>
          </div>
          <form onSubmit={submitForm} className="flex flex-col">
            {tasterFor === "someone else" && (
              <div className="mb-12 flex max-w-md flex-col justify-evenly rounded-md bg-violet-100 p-6 shadow-md">
                <ParentInfo />
              </div>
            )}
            <div className="flex max-w-md flex-col justify-evenly rounded-md bg-violet-100 p-6 shadow-md">
              <PupilInfo
                setState={setPupilInfo}
                onFieldChange={onFieldChange}
                pupilInfoState={pupilInfo}
                tasterFor={tasterFor}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="m-6 rounded-full bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 
            via-50% to-violet-900/80 to-90% p-2 pl-5 pr-5 text-slate-100"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
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
