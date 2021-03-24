import React from "react";

export default function Content({children, className, style}){
    return(
        <div className={className !== undefined ? className : "content"} style={style}>
            {children}
        </div>
    )
}
