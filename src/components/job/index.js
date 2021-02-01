import React from "react";
import {Container} from "./styles/job";

export default function Job({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Job.List = function JobList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};