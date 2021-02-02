import styled from 'styled-components'; 


export const Container = styled.section`
	display: flex;
	flex-direction: row;
    margin-left: 60px;
`;

export const Group = styled.form `
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    padding-left: 30px;
    padding-right: 103px;
    padding-bottom: -28px;
    width: 55%;
    margin-left: 19px;
` 


export const Input = styled.input`
    margin-left: 15px;
    margin-right: 24px;
    padding: 0 4px;
    height: 32px;
    border: none;
    background: transparent;
    margin-top: 19px;
    margin-bottom: 22px
`;

export const Submit = styled.button`
    background-color: rgb(76,165,238);
    padding: 14px 27px;
    border: none;
    color: white;
    margin-top: 7px;
    border-radius: 10px;
    margin-bottom: 4px;
    margin-top: 4px;
}

&:disabled {
    opacity: 0.5;
`;