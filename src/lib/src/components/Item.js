import React from "react";

export default function Item(props) {
    return(
        <div className="form-group form-group-lg form-group-sm">
            {props.children}
        </div>
    )
}
