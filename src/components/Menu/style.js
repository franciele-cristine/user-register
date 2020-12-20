import Styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = Styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    background-color: rgb(0, 29, 61);
`
export const LinkContainer = Styled.div `
    width: 30vw;
    display: flex;
    justify-content: space-around;
`

export const LinkContainerUsers = Styled.div `
    width: 80vw;
    display: flex;
    justify-content: space-between;
    margin: auto;
`
export const StyledLink = Styled(Link) `
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover{
        color: #00a2ff;
    }
`
export const StyledLinkIcons = Styled(Link) `
    color: #fff;
    text-decoration: none;
    font-size: 1.8rem;
    &:hover{
        color: #00a2ff;
    }
`

