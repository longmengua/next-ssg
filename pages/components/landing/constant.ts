
export const Menu = {
    Home: "",
    ProblemWeSolved: "Problem We Solved",
    WhatWeDo: "What We Do",
    Product: "Product",
    CompetitiveAdvantages: "Competitive Advantages",
    Technology: "Technology",
    CEXISWAPSecretAgentMission: "CEXISWAP Secret Agent Mission",
    MillionUSD: "Million $USD will be unlocked SOON!",
    News: "News",
    Team: "Team",
    Investors: "Investors",
}

export interface FooterTabI {
    title: string,
    link: string
}

export const FooterLink: Record<string, Record<string, FooterTabI>> = {
    Discover: {
        Product: {
            title: 'Product',
            link: 'https://docs.cexiswap.io/cexiswap/summary',
        },
        Technology: {
            title: 'Technology',
            link: 'https://docs.cexiswap.io/cexiswap/trade-pipe-technology-tpt',
        },
        // Performance: {
        //     title: 'Performance',
        //     link: 'https://docs.cexiswap.io/cexiswap/trade-pipe-technology-tpt',
        // },
        WhitePaper: {
            title: 'White Paper',
            link: 'whitepaper.pdf',
        },
        AuditReport: {
            title: 'Audit Report',
            link: 'https://docs.cexiswap.io/cexiswap/audits',
        }
    },
    Developer: {
        SmartContract: {
            title: 'Smart Contract',
            link: 'https://docs.cexiswap.io/cexiswap/smart-contract',
        },
        API: {
            title: 'API',
            link: 'https://docs.cexiswap.io/cexiswap/api',
        }
    },
    Community: {
        Twitter: {
            title: 'Twitter',
            link: 'https://twitter.com/cexiswap',
        },
        TelegramOfficial: {
            title: 'Telegram (Official)',
            link: 'https://t.me/cexiswap_official',
        },
        TelegramAnnounce: {
            title: 'Telegram (Announce)',
            link: 'https://t.me/cexiswap_announce',
        },
    },
    Token: {
        CEXI: {
            title: 'CEXI/ sCEX Token',
            link: 'https://docs.cexiswap.io/token/cexi-scex-token',
        },
        Trade: {
            title: 'Trade to Earn Mining',
            link: 'https://docs.cexiswap.io/token/trade-to-earn-mining',
        },
        Tokenomics: {
            title: 'Tokenomics',
            link: 'https://docs.cexiswap.io/token/tokenomics',
        },
    },
    Support: {
        Gitbook: {
            title: 'Gitbook',
            link: 'https://docs.cexiswap.io/',
        },
        FAQ: {
            title: 'FAQ',
            link: 'https://docs.cexiswap.io/support/faqs',
        },
        contract: {
            title: 'contact@cexiswap.io',
            link: 'mailto:investor@cexiswap.io?subject=The%20subject%20of%20the%20mail',
        },
        investor: {
            title: 'investor@cexiswap.io',
            link: 'mailto:investor@cexiswap.io?subject=The%20subject%20of%20the%20mail',
        }
    },
}