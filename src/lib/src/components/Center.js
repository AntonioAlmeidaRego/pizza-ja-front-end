import React from "react";

export default function Center(props) {
    return(
        <div className="align-content-center align-content-lg-center align-content-md-center
            align-content-sm-center align-content-xl-center
            justify-content-center justify-content-md-center
            justify-content-sm-center
            justify-content-lg-center
            justify-content-xl-center
            text-center
            align-content-center
            align-items-center
            align-items-lg-center
            align-items-md-center
            ">
            {props.children}
        </div>
    )
}
