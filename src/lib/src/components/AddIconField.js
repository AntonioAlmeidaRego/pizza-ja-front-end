import React from "react";
import Style from "../styles/Style";

export default function AddIconField({children, right, left, top, bottom}) {
    return (
        <div style={left ? Style.addIconFieldLeft() : right ? Style.addIconFieldRight() : top ? Style.addIconFieldTop() : bottom ? Style.addIconFieldBottom() : null}>
            {children}
        </div>
    )
}
