import React from "react";
import {Title, Container} from "./styles/search";

export default function Search ({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Search.Title = function SearchTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}



