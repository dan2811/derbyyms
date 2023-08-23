"use client";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FadeInView from "~/components/FadeInView";
import jmcStudents from "../assets/keys/jmc-students.png";
import drums from "../assets/drums/drums.webp";
import vocals from "../assets/vocals/vocals.webp";
// import { parseMinsPastMidnight } from "~/helpers/time";
import { BsChevronDoubleDown } from "react-icons/bs";
import { CustomHead } from "~/components/CustomHead";
import { Layout } from "~/components/Layout";

export default function Home() {
  const googleMapsLink =
    "https://www.google.com/maps/place/Derby+Yamaha+Music+School/@52.910254,-1.4516132,17z/data=!3m1!4b1!4m6!3m5!1s0x4879f10070bf048b:0x3f2160201caaf381!8m2!3d52.910254!4d-1.4516132!16s%2Fg%2F1tfkf37x?entry=ttu";

  // const { data, isLoading } = api.day.getOpeningTimes.useQuery();

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
      <Layout>
        <article className="flex h-full w-full snap-y snap-mandatory flex-col overflow-y-scroll scroll-smooth bg-violet-50">
          <section className="flex h-[calc(100vh-8rem)] w-full snap-start flex-col items-center justify-around overflow-y-hidden">
            <h1
              className={`select-none bg-gradient-to-r from-violet-900/80 from-10% via-pink-400/80 p-2 via-${mousePos.x}% to-violet-900/80 to-90% 
                bg-clip-text text-center text-6xl font-bold text-transparent sm:text-8xl md:text-9xl`}
            >
              Professional Music Tuition in{" "}
              <a
                className="cursor-pointer hover:text-violet-600"
                href={googleMapsLink}
                target="_blank"
              >
                Derby.
              </a>
            </h1>
            <Link
              href="/taster"
              className="max-w-xs rounded-full bg-gradient-to-r from-violet-900/80 to-pink-400/80 p-2 pl-5 pr-5 text-center text-white shadow-md"
            >
              Free Taster Lesson
            </Link>

            <a href="#Begin">
              <BsChevronDoubleDown
                className="animate-bounce text-violet-900/80"
                size={50}
              />
            </a>
          </section>

          <InfoCard
            mouseX={mousePos.x}
            heading="Begin"
            description="Whether you're a beginner or an experienced player, 4 or 94,
              you can develop your talent quickly and enjoyably with our tried and
              tested, high quality educational program, developed by the world
              leader in music - Yamaha."
            img={jmcStudents}
            alt="Keyboard students"
          />
          <InfoCard
            mouseX={mousePos.x}
            heading="Belong"
            description="Since 1984, we have created a diverse range of talented
              students that have evolved into a musical family. It is our
              warm and inviting atmosphere in our classes and around our
              building that makes them feel comfortable enough to flourish
              to their full potential."
            img={drums}
            alt="some shit"
          />

          <InfoCard
            mouseX={mousePos.x}
            heading="Become"
            description="When you or your child enrol on a Yamaha Music course, you are
              not only being given the privilege of being able to develop
              your technical musical skills. You will be presented with
              unique performance opportunities too! These performances allow
              the student to develop a plethora of life skills as well as
              showcase all of the hard work they have put into honing their
              craft."
            img={vocals}
            alt="some shit"
          />
        </article>

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
      </Layout>
    </>
  );
}

interface InfoCardProps {
  mouseX: number;
  heading: string;
  description: string;
  img: StaticImageData;
  alt: string;
}

const InfoCard = ({
  mouseX,
  heading,
  description,
  img,
  alt,
}: InfoCardProps) => {
  return (
    <section
      id={heading}
      className="flex h-[calc(100vh-8rem)] w-full snap-start flex-col items-center gap-6 py-2"
    >
      <h2
        className={`h-fit w-fit select-none bg-gradient-to-r from-violet-900/80 from-10% via-pink-400/60 py-2 via-${mouseX}% to-violet-900/80 to-90% 
          bg-clip-text text-center text-8xl font-bold text-transparent`}
      >
        {heading}
      </h2>
      <p className="max-w-md px-10 text-justify">{description}</p>
      <Link
        href="/taster"
        className="max-w-xs rounded-full bg-gradient-to-r from-violet-900/80 to-pink-400/80 px-5 py-2 text-center text-white shadow-md"
      >
        Free Taster Lesson
      </Link>
      <Image
        src={img}
        alt={alt}
        className="h-fit w-auto max-w-sm overflow-clip"
      />
    </section>
  );
};
