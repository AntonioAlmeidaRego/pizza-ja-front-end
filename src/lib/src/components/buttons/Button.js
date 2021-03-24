import React from "react";

export default function Button({className, style, onBack, onClick, ...props}) {


    return (
        <button onClick={onClick} className={className} style={style}>
            {props.children}
        </button>
    )
}
