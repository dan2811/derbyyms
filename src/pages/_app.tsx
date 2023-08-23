import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { useReportWebVitals } from "next-axiom";
export { useReportWebVitals } from "next-axiom";
import { Analytics } from "@vercel/analytics/react";

export const merriweather = Oswald({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  useReportWebVitals();
  return (
    <SessionProvider session={session}>
      <Analytics />
      <Toaster />
      <Head>
        <title>Derby YMS - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
