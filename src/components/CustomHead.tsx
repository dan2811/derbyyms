import Head from "next/head";
import { type ReactNode } from "react";
import globalMeta from "~/globalMeta";

interface CustomHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImgUrl?: string;
  children?: ReactNode[];
}

export const CustomHead = ({
  title = globalMeta.siteName,
  description = globalMeta.description,
  canonicalUrl = globalMeta.siteUrl,
  ogImgUrl = globalMeta.siteLogo,
  children,
}: CustomHeadProps) => {
  return (
    <Head>
      <title>{title} </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Guitar Lessons,Piano Lessons,Drum Lessons,Vocal Lessons,Singing Lessons,derby,Derby Guitar Lessons,Derby Piano Lessons,Derby Drum Lessons,Derby Vocal Lessons,Derby Singing Lessons,drums,guitar,vocals,keyboard,keys,piano,bass,bass guitar lessons,bass guitar,singing,singing lessons,singing lessons derby,derby vocal tutor,derby drum tutor,derby guitar tutor,derby bass tutor,derby piano tutor,derby keyboard tutor,derby yamaha, music school, derby yamaha music school, yamaha,yamaha derby school,yamaha music school, yamaha music lessons,"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={globalMeta.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Derby Yamaha Music School" />
      <meta
        name="twitter:description"
        content="Professional Music Tuition in Derby."
      />

      {/* TODO: REMOVE WHEN SITE GOES LIVE */}
      <meta name="robots" content="noindex,nofollow" />

      {children}
    </Head>
  );
};
