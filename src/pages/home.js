import React from "react";
import HeaderContainer from "../containers/header";
import { Form, Header} from "../components";
import MainContainer from "../containers/main";

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
        </>
    )
}