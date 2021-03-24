import React from "react";
import Style from "../styles/Style";

export default function Text({value, className, color, size, weight, fontFamily, textAlign,
                                 justifyContent, alignSelf, alignItems, upper, lower, padding}) {
    return(
        <p className={className} style={Style.text(color, size, weight, fontFamily, textAlign,
            justifyContent, alignSelf, alignItems, upper, lower, padding)}>
            {value}
        </p>
    )
}
