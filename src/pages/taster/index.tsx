import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import AdultPupilForm from "~/components/taster/AdultPupilForm";
import FormWrapper from "~/components/taster/FormWrapper";
import ParentAndPupilForm from "~/components/taster/ParentAndPupilForm";
import { api } from "~/utils/api";

const TasterForm = () => {
  const session = useSession();
  const [tasterFor, setTasterFor] = useState<"me" | "someone else">(
    "someone else"
  );
  const [instruments, setInstruments] = useState<
    { id: string; name: string }[]
  >([]);
  const { data: retrieveInstruments, status } =
    api.instrument.getAll.useQuery<{ id: string; name: string }[]>();

  useEffect(() => {
    if (status === "success") {
      setInstruments(retrieveInstruments);
    }
  }, [retrieveInstruments, status]);

  if (session.status === "unauthenticated") return signIn();

  return (
    <>
      <div className="flex h-fit w-full justify-center md:mb-8 md:mt-8">
        <div className="flex flex-col">
          <FormWrapper>
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
          </FormWrapper>

          {tasterFor === "me" && <AdultPupilForm instruments={instruments} />}
          {tasterFor === "someone else" && (
            <ParentAndPupilForm instruments={instruments} />
          )}
        </div>
      </div>
    </>
  );
};

const Taster = () => {
  return (
    <div>
      <TasterForm />
      <Footer />
    </div>
  );
};

export default Taster;
