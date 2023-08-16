"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FadeInView from "~/components/FadeInView";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/NavBar";
import jmcStudents from "../assets/jmc-students.png";
// import ThemedCard from "~/components/themedCard";
import { parseMinsPastMidnight } from "~/helpers/time";
import { api } from "~/utils/api";
import { BsChevronDoubleDown } from "react-icons/bs";
import { CustomHead } from "~/components/CustomHead";

export default function Home() {
  const googleMapsLink =
    "https://www.google.com/maps/place/Derby+Yamaha+Music+School/@52.910254,-1.4516132,17z/data=!3m1!4b1!4m6!3m5!1s0x4879f10070bf048b:0x3f2160201caaf381!8m2!3d52.910254!4d-1.4516132!16s%2Fg%2F1tfkf37x?entry=ttu";

  const { data, isLoading } = api.day.getOpeningTimes.useQuery();

  const [mousePos, setMousePos] = useState({ x: 50, y: 0 });

  const roundToNearest5 = (x: number) => Math.ceil(x / 5) * 5;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const totalWidth = event.view?.outerWidth;
      if (totalWidth) {
        const xPercentage: number = (event.clientX / totalWidth) * 100;
        console.log(roundToNearest5(xPercentage));
        if (xPercentage > 80) {
          setMousePos({ x: 80, y: event.clientY });
          return;
        }
        if (xPercentage < 20) {
          setMousePos({ x: 20, y: event.clientY });
          return;
        }
        setMousePos({ x: roundToNearest5(xPercentage), y: event.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <CustomHead />
      <main className="h-full w-full overflow-y-hidden">
        <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
          <div className="flex h-full w-full snap-start flex-col items-center justify-start md:gap-52 md:pt-8">
            <p
              className={`w-full select-none bg-gradient-to-r from-violet-900/80 from-10% via-pink-400/80 via-${mousePos.x}% to-violet-900/80 to-90% 
                  bg-clip-text p-2 text-center text-8xl font-bold text-transparent`}
            >
              Professional Music Tuition in{" "}
              <a
                className="cursor-pointer hover:text-violet-600"
                href={googleMapsLink}
                target="_blank"
              >
                Derby.
              </a>
            </p>
            <Link
              href="/taster"
              className="max-w-xs rounded-full bg-gradient-to-r from-violet-900/80 to-pink-400/80 p-2 pl-5 pr-5 text-center text-white shadow-md"
            >
              Free Taster Lesson
            </Link>

            <a href="#begin">
              <BsChevronDoubleDown
                className="animate-bounce text-violet-900/80"
                size={50}
              />
            </a>
          </div>

          <FadeInView>
            <div
              id="begin"
              className="flex h-screen w-1/2 snap-start items-start justify-center pt-8"
            >
              <div className="h-1/2 w-3/4">
                <p className="text-8xl font-bold">Begin</p>
                <p>
                  Whether you&apos;re a beginner or an experienced player, 4 or
                  94, you can develop your talent quickly and enjoyably with our
                  tried and tested, high quality educational program, developed
                  by the world leader in music - Yamaha.
                </p>
              </div>
            </div>
          </FadeInView>
          <FadeInView>
            <div className="flex h-screen w-1/2 snap-start items-start justify-center pt-8">
              <div className="h-1/2 w-3/4">
                <p className="text-8xl font-bold">Belong</p>
                <p>
                  Since 1984, we have created a diverse range of talented
                  students that have evolved into a musical family. It is our
                  warm and inviting atmosphere in our classes and around our
                  building that makes them feel comfortable enough to flourish
                  to their full potential.
                </p>
              </div>
            </div>
          </FadeInView>
          <FadeInView>
            <div className="flex h-screen w-1/2 snap-start items-start justify-center pt-8">
              <div className="h-1/2 w-3/4">
                <p className="text-8xl font-bold">Become</p>
                <p>
                  When you or your child enrol on a Yamaha Music course, you are
                  not only being given the privilege of being able to develop
                  your technical musical skills. You will be presented with
                  unique performance opportunities too! These performances allow
                  the student to develop a plethora of life skills as well as
                  showcase all of the hard work they have put into honing their
                  craft.
                </p>
              </div>
            </div>
          </FadeInView>
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
