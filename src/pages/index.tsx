import Head from "next/head";
import Image from "next/image";
import LogoFull from "../assets/logo-full.png";

const LogoBanner = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Image
          src={LogoFull}
          alt="Yamaha Music School"
          className="max-w-xl rounded-2xl bg-white p-3"
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Derby YMS - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className="">
        <LogoBanner />
      </main>
    </>
  );
}
