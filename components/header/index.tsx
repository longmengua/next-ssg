import React from 'react'
import {LinkI, MultiLayerMenu, TabI} from "../multi-layer-menu";

export const Header = () => {
    const pages: Array<TabI> = [
        {title: 'Launchpad', array: [
            {title: 'Nft PreSale', link: ''},
            {title: 'Token PreSale', link: ''},
        ]},
        {title: 'My Assets', array: [
                {title: 'NFT', link: ''},
                {title: 'Tokens', link: ''},
            ]},
        {title: 'Game Store', underConstruct: true},
        {title: 'Staking', underConstruct: true},
        {title: 'Launcher', underConstruct: true},
    ];

    const onClickLink = (p: LinkI) => {
        if(p.isExternal) {
            window.open(p.link, '_blank')
            return
        }
    }

    return (
        <div className={'header'}>
            <div className={'header__logo'}>
                <a
                    href={'https://www.catheongaming.center/'}
                    target={'_blank'} rel="noreferrer"
                >
                    <div className={''} />
                </a>
            </div>
            <div className={'header__menu'}>
                <MultiLayerMenu data={pages} onClick={onClickLink}/>
            </div>
            <div className={'header__userInfo'} />
        </div>
    )
}
