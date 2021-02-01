import React from "react";
import HeaderContainer from "../containers/header";
import { Form, Header} from "../components";
import MainContainer from "../containers/main";
import SearchContainer from "../containers/search";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Header.Title></Header.Title>
                <Form>
                    <Form.Input placeholder="Title, company" /> 
                    <Form.Submit>Search</Form.Submit>        
                </Form>
            </HeaderContainer>
            <MainContainer></MainContainer>
            {/* <SearchContainer></SearchContainer> */}
        </>
    )
}