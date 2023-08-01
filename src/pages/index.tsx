"use client";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "~/components/Footer";

export default function Home() {
  const googleMapsLink =
    "https://www.google.com/maps/place/Derby+Yamaha+Music+School/@52.910254,-1.4516132,17z/data=!3m1!4b1!4m6!3m5!1s0x4879f10070bf048b:0x3f2160201caaf381!8m2!3d52.910254!4d-1.4516132!16s%2Fg%2F1tfkf37x?entry=ttu";

  const openingTimes = [
    { day: "Monday", hours: "16:00 - 20:00" },
    { day: "Tuesday", hours: "16:00 - 20:00" },
    { day: "Wednesday", hours: "16:00 - 20:00" },
    { day: "Thursday", hours: "16:00 - 20:00" },
    { day: "Friday", hours: "16:00 - 20:00" },
    { day: "Saturday", hours: "09:30 - 16:30" },
    { day: "Sunday", hours: "10:00 - 16:00" },
  ];
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
            <div>placeholder</div>
            <div>placeholder</div>
            <p className="text-6xl	font-bold">Open to all ages since 1984.</p>
          </div>
          <div className="flex w-full place-content-center pt-10">
            <Link
              href="/taster"
              className="rounded-full bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 via-50% 
            to-violet-900/80 to-90% p-2 pl-5 pr-5 text-slate-300"
            >
              Free Taster Lesson
            </Link>
          </div>
          <div className="flex flex-col place-content-center place-items-center">
            <h3>Opening Times</h3>
            {/* <table>
              {openingTimes.map((day) => {
                return (
                  <tr
                    key={day.day}
                    className="border-separate border-2 border-solid border-black"
                  >
                    <td className="border-r-2 border-black p-2">{day.day}</td>
                    <td className="p-2">{day.hours}</td>
                  </tr>
                );
              })}
            </table> */}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
