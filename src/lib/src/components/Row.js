import React from "react";

export default function Row(props) {

    return (
        <div className="row flex-lg-row flex-md-row flex-xl-row">
            {props.children}
        </div>
    )
}
