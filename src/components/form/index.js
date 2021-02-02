import React from "react";
import {Container,Group, Input, Submit} from "./styles/form";

export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
} 


Form.Group = function FormGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};


Form.Submit = function FormInput({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>;
};

