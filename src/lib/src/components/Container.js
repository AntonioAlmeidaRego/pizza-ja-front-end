import React from "react";

export default function Container({className, style, children}) {
    return(
        <div className={className !== undefined ? className : "container-fluid container wrapper"} style={style}>
            {children}
        </div>
    )
}
