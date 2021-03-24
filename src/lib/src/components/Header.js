import React from "react";
import Container from "./Container";

export default function Header({children, className, style}) {
    return(
        <Container>
            <div className={className !== undefined ? className : "content-header"} style={style}>
                {children}
            </div>
        </Container>
    )
}
