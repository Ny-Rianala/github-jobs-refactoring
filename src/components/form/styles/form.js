import styled from 'styled-components'; 


export const Container = styled.section`
	display: flex;
	flex-direction: row;
	background-color: ghostwhite;
    margin-left: 60px;
`;


export const Input = styled.input`
    margin-left: 10px;
    margin-right: -82px;
	padding-left: 42px;
	padding-right: 133px;
    padding-top: 19px;
	padding-bottom: 22px;
    border: none;
    background-color: white;

&:last-of-type {
    margin-bottom: 30px;
}
`;

export const Submit = styled.button`
    background-color: rgb(76,165,238);
    padding: 16px 19px;
    border: none;
    color: white;
    margin-top: 7px;
    border-radius: 10px;
    max-height: 50%;
    margin-bottom: 35px;

&:disabled {
    opacity: 0.5;
}
`;