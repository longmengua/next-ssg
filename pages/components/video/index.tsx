import React, {useEffect, useState} from 'react'
import {Overlay} from "../overlay";

interface VideoPropI {
    onClose?: () => void,
}

export const Video: React.FC<VideoPropI> = (props) => {
    const [size, setSize] = useState({
        height: 0,
        width: 0,
    });

    useEffect(() => {
        const newSize = {
            height: 0,
            width: 0,
        }
        const screen = window.screen
        // get minimum value
        let size = screen.height > screen.width ? screen.width : screen.height
        console.log(size)
        if(size > 800){
            newSize.height = size*0.6
            newSize.width = size
        } else if (size > 400) {
            newSize.height = size*0.7
            newSize.width = size*0.9
        } else {
            newSize.height = size
            newSize.width = size
        }
        setSize(newSize)
    }, [])
    return <Overlay onClose={props.onClose}>
        <iframe
            className={"iframe"}
            style={{height: `${String(size.height)}px`, width: `${String(size.width)}px`}}
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/yTLgTkV39cE?controls=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </Overlay>
}