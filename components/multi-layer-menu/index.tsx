import './index.scss'
import React, {CSSProperties, ReactNode} from "react";
import {Tooltip} from "@mui/material";
import {Select} from "../select";

export interface TabI {
    title: string,
    link?: string,
    isExternal?: boolean
    array?: Array<TabI>,
    underConstruct?: boolean,
}

export interface LinkI {link: string, isExternal: boolean}

export const MultiLayerMenu = (p: {data: Array<TabI>, onClick: (p: LinkI) => void, style?: CSSProperties}) => {
    const { data, onClick, style } = p

    const renderTab = (tab: TabI, index: number): ReactNode => {
        if (tab.underConstruct){
            return  <Tooltip title={'Coming soon'} key={`${tab.title}`}>
                <div className={'MultiLayerMenu__tab MultiLayerMenu__title'}>{tab.title}</div>
            </Tooltip>
        }
        if(tab.link === '' || tab.link) {
            const prop: LinkI = { link: tab.link, isExternal: !!tab?.isExternal }
            return <div className={'MultiLayerMenu__tab'} onClick={() => onClick(prop)} key={`${tab.title}`}>{tab.title}</div>
        }
        if(tab.array && tab.array.length > 0){
            return <Select title={tab.title} top={40} key={`select-${tab.title}`}>{tab.array.map(value => renderTab(value, index))}</Select>
        }
        throw new Error('Missing properties, at least need link or array property')
    }

    return <div className={'MultiLayerMenu'} style={style}>
        {data.map(renderTab)}
    </div>
}