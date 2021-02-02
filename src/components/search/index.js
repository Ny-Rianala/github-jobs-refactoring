import React from "react";
import {Container, Checkbox, Form, InputSearch, FormInput, InputLabel, FormCheckbox, LabelOnCheckbox, LabelForCity} from "./styles/search";

export default function Search ({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}


Search.Form = function SearchForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
}


Search.Checkbox = function SearchCheckbox({children, ...restProps}) {
    return <Checkbox {...restProps}>{children}</Checkbox>
}


Search.InputSearch = function SearchInputSearch({children, ...restProps}) {
    return <InputSearch {...restProps}>{children}</InputSearch>
}


Search.FormInput = function SearchFormInput({children, ...restProps}) {
    return <FormInput {...restProps}>{children}</FormInput>
}

Search.InputLabel = function SearchInputLabel({children, ...restProps}) {
    return <InputLabel {...restProps}>{children}</InputLabel>
}

Search.FormCheckbox = function SearchFormCheckbox({children, ...restProps}) {
    return <FormCheckbox {...restProps}>{children}</FormCheckbox>
}

Search.LabelOnCheckbox = function SearchLabelOnCheckbox({children, ...restProps}) {
    return <LabelOnCheckbox {...restProps}>{children}</LabelOnCheckbox>
}

Search.LabelForCity = function FormLabelForCity({children, ...restProps}) {
	return <LabelForCity {...restProps}>{children}</LabelForCity>
}