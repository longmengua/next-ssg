import './index.scss'
import React, {useState} from "react";
import { ClickAwayListener } from '@mui/base';


export const Select = (p: {children: React.ReactNode, title: React.ReactNode, top?: number}) => {
    const { top } = p
    const [open, setOpen] = useState(false)

    const trigger = (e: React.MouseEvent) => {
        e.stopPropagation()
        setOpen(prevState => !prevState)
    }

    const onClose = () => {
        setOpen(prevState => false)
    }

    return <ClickAwayListener onClickAway={onClose}>
        <div className={'select'}>
            <div className={'select__title'} onClick={trigger}>{p.title}</div>
            {open && <div className={'select__section'} style={{top: top ?? `${top}px`}} onClick={onClose}>{p.children}</div>}
        </div>
    </ClickAwayListener>
}