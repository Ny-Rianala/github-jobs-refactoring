import React from "react";
import {Container, Input, Submit} from "./styles/form";

export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
} 

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};


Form.Submit = function FormInput({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>;
};
