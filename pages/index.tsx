import type { NextPage } from "next";
import Head from "next/head";
import { Landing } from "../components/landing";
import React from "react";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="CEXI Swap" />
        <meta name="twitter:creator" content="@CEXISwap" />
        <meta name="twitter:title" content="CEXI Swap" />
        <meta
          name="twitter:description"
          content="Liberate CEX Prices on DEX to Every Chain"
        />
        <meta
          id="twitter-image"
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_PREVIEW}preview/twitter_home.jpg`}
        />
        <meta
          id="fb-url"
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_PREVIEW}preview/`}
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
          content={`${process.env.NEXT_PUBLIC_PREVIEW}preview/fb_home.jpg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CEXISWAP - Liberate CEX Prices on DEX</title>
        <link rel="icon" href="./logo.png" />
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
