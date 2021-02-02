import styled from "styled-components";


export const Container = styled.section `
    display: flex;
    flex-direction: column;
    padding-bottom: 210px;
`

export const Checkbox = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 29px;
    margin-left: 20px;
`
export const InputLabel = styled.div `
    margin-left: 12px;
`

export const Form = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 18px;
    height: 18px;
    margin-right: 12px;
    padding-bottom: 100px;
`

export const InputSearch = styled.input `
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-right: 72px;
    padding-left: 25px;
    padding-right: 146px;
    padding-top: 17px;
    padding-bottom: 17px;
    width: 160px;
    height: 14px;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.39);
    -webkit-box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.39);
    -moz-box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.39);
`

export const FormInput = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    margin-top: 35px;
`

export const FormCheckbox = styled.form `
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    padding-top: 27px;
    gap: 5px;
`


export const LabelOnCheckbox = styled.div `
    display: flex;
    flex-direction: row;
`

export const LabelForCity = styled.label `
    color: grey;
    text-transform: uppercase;
    padding-bottom: 10px;
`