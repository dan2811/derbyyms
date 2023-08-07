"use client";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "~/components/Footer";
import { parseMinsPastMidnight } from "~/helpers/time";
import { api } from "~/utils/api";

export default function Home() {
  const googleMapsLink =
    "https://www.google.com/maps/place/Derby+Yamaha+Music+School/@52.910254,-1.4516132,17z/data=!3m1!4b1!4m6!3m5!1s0x4879f10070bf048b:0x3f2160201caaf381!8m2!3d52.910254!4d-1.4516132!16s%2Fg%2F1tfkf37x?entry=ttu";

  const { data, isLoading } = api.day.getOpeningTimes.useQuery();

  return (
    <>
      <Head>
        <title>Derby YMS - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main>
        <div className="flex flex-col">
          <div className=" grid justify-around gap-4 self-center pt-10 md:grid-cols-2 lg:w-3/4">
            <p className="text-6xl font-bold">
              Professional Music Tuition in{" "}
              <a
                className="cursor-pointer hover:text-violet-600"
                href={googleMapsLink}
                target="_blank"
              >
                Derby.
              </a>
            </p>
            <div>
              <iframe
                className="w-screen p-0.5 md:max-w-md"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/y_j9N6RqYHU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div>placeholder</div>
            <p className="text-6xl	font-bold">Open to all ages since 1984.</p>
          </div>
          <div className="flex w-full place-content-center pt-10">
            <Link
              href="/taster"
              className="rounded-full bg-gradient-to-r from-violet-900/80 to-pink-400/80 p-2 pl-5 pr-5 text-white shadow-md"
            >
              Free Taster Lesson
            </Link>
          </div>
          <div className="flex">
            {isLoading ? (
              <div>Loading opening times</div>
            ) : (
              <div>
                {data?.map((day, idx) => (
                  <div className="flex justify-between" key={day.name}>
                    <div className="text-6xl font-bold">{"OPENING"[idx]}</div>
                    <div className="m-1 w-32 skew-x-12 rounded-lg bg-gradient-to-r from-violet-900/80 to-pink-400/80 p-1 text-slate-300 duration-500 hover:translate-x-1 hover:text-white">
                      <div className="-skew-x-12 text-center">
                        <span>{day.name}</span>
                        <br />
                        <span>
                          {`${parseMinsPastMidnight(
                            day.openingTime
                          )} - ${parseMinsPastMidnight(day.closingTime)}`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
