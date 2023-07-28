import Head from "next/head";
import Image from "next/image";
import PurpleLogo from "../assets/logo-waves.svg";
import Link from "next/link";
import { Footer } from "~/components/Footer";

export default function Home() {
  const googleMapsLink =
    "https://www.google.com/maps/place/Derby+Yamaha+Music+School/@52.910254,-1.4516132,17z/data=!3m1!4b1!4m6!3m5!1s0x4879f10070bf048b:0x3f2160201caaf381!8m2!3d52.910254!4d-1.4516132!16s%2Fg%2F1tfkf37x?entry=ttu";
  return (
    <>
      <Head>
        <title>Derby YMS - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main>
        <div className="flex flex-col">
          <div className="w-full bg-black p-6">
            <Image
              src={PurpleLogo as string}
              width={500}
              alt="Yamaha logo"
              className="place-self-center"
            />
          </div>
          <div className="justify-around self-center pt-10 lg:flex lg:w-3/4">
            <h2 className=" max-w-md	text-6xl	font-bold	">
              Professional Music Tuition in{" "}
              <a
                className="cursor-pointer hover:text-violet-600"
                href={googleMapsLink}
                target="_blank"
              >
                Derby.
              </a>
            </h2>
            <div
              className="to-99% mt-10
            flex items-center rounded-xl bg-gradient-to-r from-violet-600/80 from-10% via-violet-500/80 
            via-80% to-violet-600/80
            p-6 text-slate-200 backdrop-blur backdrop-filter md:mt-0"
            >
              <p className="w-80">
                Based in Pride Park, Derby, our school has delivered
                Yamaha&apos;s world renowned education system for over 30 years.
              </p>
            </div>
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
          <div>
            Opening Times <br></br>
            Get these from db through api call (use SSR because these won&apos;t
            change often, maybe force revalidate every hour or so?) Opening
            Hours Monday - Friday: 16:00 - 20:00 Saturday: 09:30 - 16:30 Sunday:
            10:00 - 16:00
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
