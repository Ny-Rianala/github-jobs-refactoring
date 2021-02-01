import React from "react"
import {Container, Card, Section, Wrapper, Logo, Info, Button} from "./styles/main";


export default function Main ({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Main.Section = function MainSection({ children, ...restProps }) {
	return <Section {...restProps}>{children}</Section>;
};

Main.Card = function MainCard({ children, ...restProps }) {
	return <Card {...restProps}>{children}</Card>;
};

Main.Wrapper = function MainWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Main.Logo = function MainLogo({src,...restProps}) {
    return <Logo {...restProps} src={src}/>
}

Main.Info = function MainInfo({children, ...restProps}) {
    return <Info {...restProps}>{children}</Info>
}

Main.Button = function MainButton ({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}