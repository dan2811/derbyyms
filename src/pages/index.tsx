"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Footer } from "~/components/Footer";
import ThemedCard from "~/components/ThemedCard";
import { parseMinsPastMidnight } from "~/helpers/time";
import { api } from "~/utils/api";

export default function Home() {
  const googleMapsLink =
    "https://www.google.com/maps/place/Derby+Yamaha+Music+School/@52.910254,-1.4516132,17z/data=!3m1!4b1!4m6!3m5!1s0x4879f10070bf048b:0x3f2160201caaf381!8m2!3d52.910254!4d-1.4516132!16s%2Fg%2F1tfkf37x?entry=ttu";

  const { data, isLoading } = api.day.getOpeningTimes.useQuery();
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const element = ref.current;
    if (element !== null) {
      element.addEventListener("scroll", handleScroll);
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Derby YMS - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
        {/* search engine description */}
        <meta
          property="description"
          content="High quality professional music tuition in Derby"
        />
        {/* //Link preview title */}
        <meta property="og:title" content="Derby Yamaha Music School"></meta>
        {/* Link preview description */}
        <meta
          property="og:description"
          content="High quality professional music tuition in Derby"
        />
      </Head>
      <main
        ref={ref}
        className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll"
      >
        {/* Left side content */}

        <div className="flex h-screen w-1/2 snap-start items-start justify-center pt-8">
          <div className="h-1/2 w-3/4">Nice image here</div>
        </div>

        <div className="flex h-screen w-1/2 snap-start items-start justify-center pt-8">
          <div className="h-1/2 w-3/4">
            <ThemedCard>
              <p className="text-8xl font-bold">Begin</p>
              <p>
                Whether you're a beginner or an experienced player, 4 or 94, you
                can develop your talent quickly and enjoyably with our tried and
                tested, high quality educational program, developed by the world
                leader in music - Yamaha.
              </p>
            </ThemedCard>
          </div>
        </div>
        <div className="flex h-screen w-1/2 snap-start items-start justify-center pt-8">
          <div className="h-1/2 w-3/4">
            <ThemedCard>
              <p className="text-8xl font-bold">Belong</p>
              <p>
                Since 1984, we have created a diverse range of talented students
                that have evolved into a musical family. It is our warm and
                inviting atmosphere in our classes and around our building that
                makes them feel comfortable enough to flourish to their full
                potential.
              </p>
            </ThemedCard>
          </div>
        </div>
        <div className="flex h-screen w-1/2 snap-start items-start justify-center pt-8">
          <div className="h-1/2 w-3/4">
            <ThemedCard>
              <p className="text-8xl font-bold">Become</p>
              <p>
                When you or your child enrol on a Yamaha Music course, you are
                not only being given the privilege of being able to develop your
                technical musical skills. You will be presented with unique
                performance opportunities too! These performances allow the
                student to develop a plethora of life skills as well as showcase
                all of the hard work they have put into honing their craft.
              </p>
            </ThemedCard>
          </div>
        </div>
        <div className=" h-screen w-screen snap-start border-y-8 border-cyan-300">
          Section 4
        </div>
        <div className=" h-screen w-screen snap-start border-y-8 border-cyan-300">
          Section 5
        </div>
        <div className=" h-screen w-screen snap-start border-y-8 border-cyan-300">
          Section 6
        </div>
        <div className=" h-screen snap-start border-y-8 border-cyan-300">
          Section 7
        </div>
        <div className=" h-screen snap-start border-y-8 border-cyan-300">
          Section 8
        </div>
        <div className=" h-screen snap-start border-y-8 border-cyan-300">
          Section 9
        </div>
        <div className=" h-screen snap-start border-y-8 border-cyan-300">
          Section 10
        </div>
        <div className=" h-screen snap-start border-y-8 border-cyan-300">
          Section 11
        </div>
        <div className="fixed right-0 top-0 -z-40 flex h-screen w-1/2 place-content-center">
          <div className="w-1/3 place-self-center">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="mb-4">
                <p className="-z-50 select-none text-8xl font-bold">
                  Professional Music Tuition in{" "}
                  <a
                    className="cursor-pointer hover:text-violet-600"
                    href={googleMapsLink}
                    target="_blank"
                  >
                    Derby.
                  </a>
                </p>
              </div>
              <div className="z-50 flex w-full place-content-center pt-10">
                <Link
                  href="/taster"
                  className="rounded-full bg-gradient-to-r from-violet-900/80 to-pink-400/80 p-2 pl-5 pr-5 text-white shadow-md"
                >
                  Free Taster Lesson
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex w-full flex-col"> */}
        {/* <ThemedCard>
              <p className="select-none text-6xl font-bold">
                Professional Music Tuition in{" "}
                <a
                  className="cursor-pointer hover:text-violet-600"
                  href={googleMapsLink}
                  target="_blank"
                >
                  Derby.
                </a>
              </p>
            </ThemedCard> */}

        {/* <ThemedCard>
              <iframe
                className="w-screen p-0.5 md:max-w-md"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/y_j9N6RqYHU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </ThemedCard> */}
        {/* <ThemedCard>placeholder</ThemedCard> */}
        {/* <ThemedCard>
              <p className="select-none text-6xl font-bold">
                Open to all ages since 1984.
              </p>
            </ThemedCard> */}
        {/* 
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
        <Footer /> */}
      </main>
    </>
  );
}
