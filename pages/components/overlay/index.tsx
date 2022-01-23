import React from "react";

interface OverlayPropI {
    onClose?: () => void,
    children?: React.ReactNode
}

export const Overlay: React.FC<OverlayPropI> = (props) => {
    const closeOutSide = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClose && props.onClose()
        e.stopPropagation()
    }

    return <div className={"overlay"} onClick={(e) => closeOutSide(e)}>
        <div className={"content"}>
            <div className={"close_btn"} onClick={props.onClose}/>
            {props.children}
        </div>
    </div>
}