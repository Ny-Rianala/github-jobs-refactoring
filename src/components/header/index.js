import React from "react";
// import {Link, ReachRouterLink} from "react-router-dom";
import {Background, Title} from "./styles/header";

export default function Header ({children, ...restProps}) {
    return <Background {...restProps}>{children}</Background>
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};