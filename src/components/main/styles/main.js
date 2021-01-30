import styled from "styled-components";

export const Container = styled.div`
    margin-left: 10px;
    
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
`

export const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 12px;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
    border-radius: 4px;
    text-decoration: none;
    margin-bottom: 24px;
    transition: box-shadow .2s;
    cursor: pointer;
    align-items: left;
`

export const Logo = styled.img`
    max-width: 50%;
    position: relative;
    min-width: 90px;
    width: 90px;
    height: 90px;
    border-radius: 4px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 16px;
` 
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: auto;
`

export const Button = styled.button`
    padding: 6px 4px;
    border: 1px solid #334680;
    border-radius: 4px;
    align-self: start;
    font-size: 1.2rem;
    line-height: 1rem;
    color: #334680;
    font-size: 16px;
}
`