import React from "react";
import HeaderContainer from "../containers/header";
import { Form, Header} from "../components";
import MainContainer from "../containers/main";
import SearchContainer from "../containers/search";

console.log(SearchContainer);

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Header.Title></Header.Title>
                <Form.Group>
                    <Form.Input placeholder="title, company" /> 
                    <Form.Submit>Search</Form.Submit>        
                </Form.Group>
            </HeaderContainer>
            <SearchContainer></SearchContainer>
            <MainContainer></MainContainer>
        </>
    )
}