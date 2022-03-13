import type { NextPage } from "next";
import Head from "next/head";
import { Landing } from "../components/landing";
import React from "react";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/apple-icon-57x57.png`}/>
        <link rel="apple-touch-icon" sizes="60x60" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/apple-icon-60x60.png`}/>
        <link rel="apple-touch-icon" sizes="72x72" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/apple-icon-72x72.png`}/>
        <link rel="apple-touch-icon" sizes="76x76" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/apple-icon-76x76.png`}/>
        <link rel="apple-touch-icon" sizes="114x114" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/apple-icon-114x114.png`}/>
        <link rel="apple-touch-icon" sizes="120x120" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/apple-icon-120x120.png`}/>
        <link rel="apple-touch-icon" sizes="144x144" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/apple-icon-144x144.png`}/>
        <link rel="apple-touch-icon" sizes="152x152" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/apple-icon-152x152.png`}/>
        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/apple-icon-180x180.png`}/>
        <link rel="icon" type="image/png" sizes="192x192" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/android-icon-192x192.png`}/>
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/favicon-32x32.png`}/>
        <link rel="icon" type="image/png" sizes="96x96" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/favicon-96x96.png`}/>
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/favicon-16x16.png`}/>
        <link rel="manifest" href={`${process.env.NEXT_PUBLIC_PREVIEW}/favicon/manifest.json`}/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        {/*twitter card*/}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Catheon" />
        <meta name="twitter:creator" content="@Catheon" />
        <meta name="twitter:title" content="Catheon" />
        <meta
          name="twitter:description"
          content="Catheon gaming"
        />
        <meta
          id="twitter-image"
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_PREVIEW}/preview/twitter_home.jpg`}
        />
        <meta
          id="fb-url"
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_PREVIEW}/preview/`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CEXI Swap" />
        <meta
          property="og:description"
          content="Liberate CEX Prices on DEX to Every Chain"
        />
        <meta
          id="fb-image"
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_PREVIEW}/preview/fb_home.jpg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CEXISWAP - Liberate CEX Prices on DEX</title>
      </Head>
      <Landing />
    </>
  );
};

// export const getStaticPaths = async () => {
//   return {
//     path: ["/"],
//     fallback: false,
//   };
// };

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Index;
