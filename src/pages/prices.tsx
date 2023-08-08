import Link from "next/link";
import React from "react";
import { Footer } from "~/components/Footer";
import { api } from "~/utils/api";

const Prices = () => {
  const { data, isLoading } = api.lessonType.getLessonPrices.useQuery();
  return (
    <>
      <div className="h-screen w-full">
        <div className="flex h-1/2 w-full flex-col place-items-center justify-between">
          <h1 className="p-8 text-6xl font-bold">Our prices.</h1>
          {isLoading
            ? "Loading..."
            : data?.map((lessonType) => {
                return (
                  <div
                    key={lessonType.name}
                    className="m-1 h-1/4 w-5/6 skew-x-12 rounded-lg bg-gradient-to-r from-violet-900/80 to-pink-400/80 p-1 text-slate-300 duration-500 hover:translate-x-1 hover:text-white md:w-1/2"
                  >
                    <Link href="/courses">
                      <div className="flex h-full w-full -skew-x-12 items-center justify-center text-xl md:text-3xl">
                        <p>
                          {lessonType.name.charAt(0).toUpperCase() +
                            lessonType.name.slice(1)}{" "}
                          lessons - £{lessonType.price.toString()}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prices;
