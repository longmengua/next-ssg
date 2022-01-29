import type { NextPage } from "next";
import Head from 'next/head'
import React from "react";

const Airdrop: NextPage = () => {
  return <div className={'airdrop'}>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8"/>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="CEXI Swap" />
      <meta name="twitter:creator" content="@CEXISwap" />
      <meta name="twitter:title" content="CEXI Swap" />
      <meta name="twitter:description" content="Liberate CEX Prices on DEX to Every Chain" />
      <meta id="twitter-image" name="twitter:image" content={`${process.env.NEXT_PUBLIC_PREVIEW}airdrop/twitter_home.jpg`}/>
      <meta id="fb-url" property="og:url" content={`${process.env.NEXT_PUBLIC_PREVIEW}airdrop/`}/>
      <meta property="og:type" content="article"/>
      <meta property="og:title" content="CEXI Swap"/>
      <meta property="og:description" content="Liberate CEX Prices on DEX to Every Chain"/>
      <meta id="fb-image" property="og:image" content={`${process.env.NEXT_PUBLIC_PREVIEW}airdrop/fb_home.jpg`}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>CEXISWAP - Liberate CEX Prices on DEX</title>
      <link rel="icon" href="./logo.png"/>
    </Head>
    <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div>
      <div className="Header">
        <div className="Logo" onClick={() => {window.location.href = '/'}} />
      </div>
      <div className="title">Airdrop</div>
      <a className="e-widget no-button generic-loader" href="https://gleam.io/wbNg9/cexiswap-airdrop" rel="nofollow">Cexiswap
        Airdrop</a>
      <div className="title">Leader board</div>
      <a className="e-widget no-button leaderboard generic-loader" href="https://gleam.io/wbNg9/leaderboard"
         rel="nofollow">Cexiswap Airdrop</a>
    </div>
    </body>
    <script type="text/javascript" src="https://widget.gleamjs.io/e.js" async />
  </div>;
};

// export const getStaticPaths = async () => {
//   return {
//     path: [],
//     fallback: false,
//   }
// }

export async function getStaticProps() {
  return {
    props: {

    }
  };
}


export default Airdrop;
