import React, { ReactNode, useEffect, useState } from "react";
import { Video } from "../video";
import { FooterLink, Menu } from "./constant";
import PackageInfo from "../../package.json";

const headerHeight = 60;
let total = 0;
const obj = {
  [Menu.Product]: {
    start: 0,
    end: 0,
  },
  [Menu.Technology]: {
    start: 0,
    end: 0,
  },
  [Menu.Team]: {
    start: 0,
    end: 0,
  },
};

export const Landing: React.FC = () => {
  const [uiState, setUiState] = useState({
    isTransparent: true,
    openVideo: false,
    hash: "",
    showPhoneMenu: false,
  });

  const playVideo = () => {
    setUiState((pre) => ({ ...pre, openVideo: true }));
    document.documentElement.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setUiState((pre) => ({ ...pre, openVideo: false }));
    document.documentElement.style.overflow = "auto";
  };

  useEffect(() => {
    const arr: HTMLCollectionOf<Element> = document.getElementsByClassName(
      "landing_section_container"
    );
    Array.from(arr).forEach((element: Element) => {
      const key: Array<string> = Object.keys(obj).filter(
        (value) => element.className.indexOf(value) > -1
      );
      try {
        if (key.length > 0) {
          // @ts-ignore
          obj[key[0]].start = total;
          // @ts-ignore
          obj[key[0]].end = total + element.scrollHeight;
        }
      } catch (e) {}
      total += element.scrollHeight;
    });
    const keys = Object.keys(obj);
    window.onscroll = () => {
      // console.log('window.onscroll')
      let bool = false; // if scroll top is in any range, set up as true.
      const scrollTop = document.documentElement.scrollTop + headerHeight;
      Object.values(obj).forEach((value, index) => {
        // console.log('onscroll', scrollTop, keys[index], value)
        if (
          value?.start &&
          value?.end &&
          scrollTop >= value?.start &&
          scrollTop < value?.end
        ) {
          // console.log(keys[index])
          setUiState((prevState) => ({ ...prevState, hash: keys[index] }));
          bool = true;
        }
      });
      if (!bool) setUiState((prevState) => ({ ...prevState, hash: "" }));
    };
  }, []);

  const activatedTab = (hash: string) =>
    uiState.hash === hash ? "active" : "";

  const onClickTab = (hash: string) => {
    try {
      setUiState((prevState) => ({ ...prevState, hash, showPhoneMenu: false }));
      document.documentElement.scrollTop = obj[hash].start - headerHeight;
      // console.log('==onClickTab', hash, uiState.hash)
    } catch (e) {
      console.error(e);
    }
  };

  // recursive loading json and rendering elements
  let counter = 0;
  const renderFooterLink = (value: any): ReactNode => {
    if (value.hasOwnProperty("title") && value.hasOwnProperty("link")) {
      const oldCounter = counter;
      counter = counter + 1;
      return (
        <div
          key={oldCounter}
          className={"sub_title"}
          onClick={() => window.open(value?.link, "_blank")}
        >
          {value?.title}
        </div>
      );
    } else if (value instanceof Array && value.length === 2) {
      const oldCounter = counter;
      counter = counter + 2;
      return (
        <div key={oldCounter} className={"category"}>
          <div key={oldCounter + 1} className={"title"}>
            {value[0]}
          </div>
          {Object.entries(value[1]).map((value1) =>
            renderFooterLink(value1[1])
          )}
        </div>
      );
    } else {
      return Object.entries(value).map((value1) => renderFooterLink(value1));
    }
  };

  const showMenu = () =>
    setUiState((prevState) => ({
      ...prevState,
      showPhoneMenu: !prevState.showPhoneMenu,
    }));

  return (
    <div className={"landing"}>
      {uiState.openVideo && <Video onClose={closeVideo} />}
      <div className={"phone_header"}>
        <div className={"logo_icon"} />
        <div className={"menu_phone"} onClick={showMenu} />
      </div>
      <div
        className={`landing_header ${
          uiState.isTransparent ? "transparent_bg" : ""
        } ${uiState.showPhoneMenu ? "show_phone_menu" : ""}`}
      >
        <div className={"logo"} onClick={() => onClickTab(Menu.Home)}>
          <div className={"logo_icon"} />
        </div>
        <div className={"menu"}>
          <div
            className={`tab ${activatedTab(Menu.Product)}`}
            onClick={() => onClickTab(Menu.Product)}
          >
            {Menu.Product}
          </div>
          {/*<div className={`tab`}>{Menu.Mission}</div>*/}
          <div
            className={`tab ${activatedTab(Menu.Technology)}`}
            onClick={() => onClickTab(Menu.Technology)}
          >
            {Menu.Technology}
          </div>
          <div
            className={`tab ${activatedTab(Menu.Team)}`}
            onClick={() => onClickTab(Menu.Team)}
          >
            {Menu.Team}
          </div>
          {/*<div className={`tab ${activatedTab(Menu.Community)}`} onClick={() => onClickTab(Menu.Community)}>{Menu.Community}</div>*/}
          <div
            className={"tab"}
            onClick={() =>
              window.open(
                "https://docs.cexiswap.io/token/cexi-scex-token",
                "_blank"
              )
            }
          >
            Token
          </div>
          <div
            className={"tab"}
            onClick={() => window.open("https://docs.cexiswap.io/", "_blank")}
          >
            Docs
          </div>
        </div>
        <div className={"navigation"}>
          {/*<div className={"tab coming_soon"}>Agent Center</div>*/}
          <div
            className={`tab heart_beat`}
            onClick={() =>
              window.open("https://www.cexiswap.io/airdrop", "_blank")
            }
          >
            Air Drop
          </div>
          <div
            className={`tab`}
            onClick={() => window.open("https://app.cexiswap.io/", "_blank")}
          >
            Trade
          </div>
        </div>
      </div>
      <div className={"landing_section_container landing_section_1"}>
        <div className={"title"}>Disrupt Blockchain Boundaries</div>
        <div className={"sub_title"}>Liberate CEX Prices on DEX</div>
        <div className={"sub_title"}>to Every Chain</div>
        <div className={"learn_more"} onClick={playVideo}>
          <div className={"text"}>Learn more</div>
          <div className={"play_btn"} />
        </div>
      </div>
      <div className={"landing_section_container landing_section_4"}>
        <div className={"space"} />
        <div className={"container"}>
          <div className={"title1"}>{Menu.ProblemWeSolved}</div>
          <div className={"title2"}>
            Exploitation & Worse DEX Prices Caused by Trapped Liquidity
          </div>
          <div className={"gap"} />
          <div className={"des"}>
            Multiple new layer one and layer two blockchain solutions create
            fragmentation of DeFi application ecosystems and the trapped,
            captive liquidity in their respective domains.
          </div>
        </div>
        <div className={"space"} />
      </div>
      <div className={"landing_section_container landing_section_9"}>
        <div className={"space"} />
        <div className={"container"}>
          <div className={"title1"}>{Menu.WhatWeDo}</div>
          <div className={"sub_title"}>
            We Disrupt Blockchain Boundaries Liberate CEX & DEX Liquidity to
            Every Chain
          </div>
          <div className={"gap"} />
          <div className={"des"}>
            CEXISWAP’s mission is to eliminate the exploitation and fulfill the
            DeFi 2.0 vision.{" "}
          </div>
        </div>
        <div className={"space"} />
      </div>
      <div
        className={`landing_section_container landing_section_2 ${Menu.Product}`}
      >
        <div className={"header"}>
          <div className={"title"}>{Menu.Product} Features</div>
          <div className={"description"}>
            CEXISWAP is a decentralized exchange that liberates DEX and CEX
            liquidity.
          </div>
        </div>
        <div className={"content"}>
          <div className={"container"}>
            <div className={"image_container"}>
              <div className={"image image1"} />
            </div>
          </div>
          <div className={"flex"}>
            <div className={"detail"}>
              <div className={"detail_icon"}>
                <div className={"icon icon1"} />
                <div className={"t"}>Better price than DEX</div>
                <div className={"des"}>
                  Competitive prices through a decentralized network
                </div>
              </div>
              <div className={"detail_icon"}>
                <div className={"icon icon2"} />
                <div className={"t"}>Better experience than CEX</div>
                <div className={"des"}>
                  No deposits are required. Trade directly from your wallet
                </div>
              </div>
              <div className={"detail_icon"}>
                <div className={"icon icon3"} />
                <div className={"t"}>Zero slippage</div>
                <div className={"des"}>
                  See the final price before trading with instant and reliable
                  price quotes
                </div>
              </div>
              <div className={"detail_icon"}>
                <div className={"icon icon4"} />
                <div className={"t"}>Front-run protection</div>
                <div className={"des"}>
                  Protection against MEV (sandwiching, arbitrage, and front
                  running)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"landing_section_container landing_section_10"}>
        <div className={"space"} />
        <div className={"container"}>
          <div className={"problem_section"}>
            <div className={"title"}>{Menu.CompetitiveAdvantages}</div>
            <div className={"sub_title"}>
              CEXISWAP is developed as an efficient, ready-to-use solution,
              bridging the gap between CEXs and DEXs, promising technology and
              mass crypto users.
            </div>
            <div className={"bg4"} />
          </div>
        </div>
        <div className={"space"} />
      </div>
      <div
        className={`landing_section_container landing_section_3 ${Menu.Technology}`}
      >
        <div className={"title"}>{Menu.Technology}</div>
        <div className={"section"}>
          <div className={"left_section"}>
            <div className={"description"}>
              <div className={"t"}>Trade Pipe Technology (TPT)</div>
              <div className={"sub_t"}>
                In order to fulfill our mission of liberating
              </div>
              <div className={"sub_t"}>
                liquidity, we built our Trade Pipe Technology
              </div>
              <div className={"sub_t"}>
                (TPT) into a DEX to execute user orders
              </div>
              <div className={"sub_t"}>
                based on the trading environment and
              </div>
              <div className={"sub_t"}>demand.</div>
              <div
                className={"git_book"}
                onClick={() =>
                  window.open(
                    "https://docs.cexiswap.io/cexiswap/trade-pipe-technology-tpt",
                    "_blank"
                  )
                }
              >
                GitBook
              </div>
            </div>
          </div>
          <div className={"right_section"}>&nbsp;</div>
        </div>
      </div>
      {/*<div className={"landing_section_container landing_section_11"}>*/}
      {/*    <div className={'title'}>{Menu.CEXISWAPSecretAgentMission}</div>*/}
      {/*    <div className={'container'}>*/}
      {/*        <div className={'left'}>*/}
      {/*            <div className={'text'}>Agent</div>*/}
      {/*            <div className={'text'}>Your mission is to create financial freedom</div>*/}
      {/*            <div className={'text'}>without exploitation:</div>*/}
      {/*            <div className={'gap'}/>*/}
      {/*            <div className={'text'}>1. Get your **CEXI Agent Badge (NFT)**</div>*/}
      {/*            <div className={'text'}>2. Win **Trade to Earn Mission Rewards**</div>*/}
      {/*            <div className={'text'}>3. Share your **Permission Code** with comrades</div>*/}
      {/*            <div className={'gap'}/>*/}
      {/*            <div className={'text'}>Good luck</div>*/}
      {/*            <div className={'gap'}/>*/}
      {/*            <div className={'button'}>Coming Soon</div>*/}
      {/*        </div>*/}
      {/*        <div className={'right'} />*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className={"landing_section_container landing_section_12"}>*/}
      {/*    <div className={'title'}>{Menu.News}</div>*/}
      {/*    <div className={'container'}>*/}
      {/*        <div className={'section'}>*/}
      {/*            <div className={'image image1'} />*/}
      {/*            <div className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper volutpat nunc nec facilisis. </div>*/}
      {/*        </div>*/}
      {/*        <div className={'section'}>*/}
      {/*            <div className={'image image2'} />*/}
      {/*            <div className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper volutpat nunc nec facilisis. </div>*/}
      {/*        </div>*/}
      {/*        <div className={'section'}>*/}
      {/*            <div className={'image image3'} />*/}
      {/*            <div className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper volutpat nunc nec facilisis. </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
      <div
        className={`landing_section_container landing_section_5 ${Menu.Team}`}
      >
        <div className={"title"}>{Menu.Team}</div>
        <div className={"profile_section"}>
          <div className={"profile_container"}>
            <div className={"photo Scott_Tsai"} />
            <div className={"name"}>Scott Tsai</div>
            <div className={"job_title"}>Co-Founder & CEO</div>
            <div
              className={"linked_icon"}
              onClick={() =>
                window.open("https://www.linkedin.com/in/scotttsai/", "_blank")
              }
            />
          </div>
          <div className={"profile_container"}>
            <div className={"photo Cheryl_Chueh"} />
            <div className={"name"}>Cheryl Chueh</div>
            <div className={"job_title"}>Co-Founder & CMO</div>
            <div
              className={"linked_icon"}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/cheryl-chueh/",
                  "_blank"
                )
              }
            />
          </div>
          <div className={"profile_container"}>
            <div className={"photo Rex_Wu"} />
            <div className={"name"}>Rex Wu</div>
            <div className={"job_title"}>Senior Full-Stack Developer</div>
            {/*<div className={'linked_icon'} onClick={() => window.open('', '_blank')}/>*/}
          </div>
          <div className={"profile_container"}>
            <div className={"photo Waltor_Huang"} />
            <div className={"name"}>Waltor Huang</div>
            <div className={"job_title"}>Senior Full-Stack Developer</div>
            {/*<div className={'linked_icon'} onClick={() => window.open('', '_blank')}/>*/}
          </div>
          <div className={"profile_container"}>
            <div className={"photo Lei_Wang"} />
            <div className={"name"}>Lei Wang</div>
            <div className={"job_title"}>Designer Lead</div>
            {/*<div className={'linked_icon'} onClick={() => window.open('', '_blank')}/>*/}
          </div>
        </div>
      </div>
      <div className={"landing_section_container landing_section_6"}>
        <div className={"title"}>{Menu.Investors}</div>
        <div className={"profile_section"}>
          <div className={"profile_container"}>
            <div className={"photo Chris_Wang"} />
            <div className={"name"}>Chris Wang</div>
            <div className={"job_title"}>
              Co-Founder/CEO at Thundercore Co-Founder at Playdom
              <div
                className={"linked_icon"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/chris0804/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>

          <div className={"profile_container"}>
            <div className={"photo Kun_Kao"} />
            <div className={"name"}>Kun Kao</div>
            <div className={"job_title"}>
              Co-Founder/CEO at Crunchyroll Co-Founder/COO at GGWP
              <div
                className={"linked_icon"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/kungao/", "_blank")
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={"landing_section_container landing_section_13"}>
        <div className={"title"}>
          <div className={"image_container"}>
            <div className={"image image1"} />
            <div className={"image image2"} />
          </div>
          <div className={"text"}>{Menu.MillionUSD}</div>
        </div>
        <div className={"sub_title"}>
          <div className={"text"}>Trading Rewards = </div>
          <div className={"text"}>Trading Volume × </div>
          <div className={"image_container"}>
            <div className={"image image1"} />
            <div className={"image image2"} />
          </div>
        </div>
        <div className={"des"}>
          <div className={"text"}>We need everyone’s strength to turn</div>
          <div className={"text"}>over a new page in Defi.</div>
          <div className={"text"}>Trade and earn a piece of</div>
          <div className={"text"}>CEXISWAP!</div>
        </div>
      </div>
      <div className={"landing_section_container landing_section_7"}>
        <div className={"flex1"} />
        <div className={"section"}>
          <div className={"title"}>Join the Mission to Fulfill Defi 2.0</div>
          <div className={"sub_title"}>
            Create a new world without exploitation
          </div>
          <div className={"question"}>Do you accept?</div>
          <div className={"flex"}>
            <div
              className={"join"}
              onClick={() => window.open("https://app.cexiswap.io", "_blank")}
            >
              Trade Now
            </div>
          </div>
        </div>
        <div className={"flex1"} />
        <div className={"footer"}>
          <div className={"social_section"}>
            <div
              className={"social social1"}
              onClick={() =>
                window.open("https://t.me/cexiswap_official", "_blank")
              }
            />
            <div
              className={"social social2"}
              onClick={() =>
                window.open("https://twitter.com/cexiswap", "_blank")
              }
            />
            <div
              className={"social social3"}
              onClick={() =>
                window.open("https://www.facebook.com/cexiswap", "_blank")
              }
            />
          </div>
        </div>
      </div>
      <div className={"landing_section_container landing_section_8"}>
        <div className={"container"}>{renderFooterLink(FooterLink)}</div>
      </div>
      <div className={"copy_right"}>
        <span>{"Copyright © 2022 CEXISWAP."}</span>{" "}
        {PackageInfo && <span>{`${PackageInfo.name}`}</span>}
      </div>
    </div>
  );
};
