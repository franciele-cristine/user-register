import Styled from 'styled-components';

const FormContainer = Styled.div `
    display: flex;
    flex-direction: column;
    margin: auto;
    position: relative;
    float: right;
    top: 150px;
    right: 5%;
`

const StyledForm = Styled.form `
    display: flex;
    flex-direction: column;
    width: 25vw;
    margin: 10px auto;
    align-items: center;
`

const Title = Styled.h2 `
    font-size: 2.4rem;
    font-weight: 900;
    color: #fff;
`

const StyledInput = Styled.input `
 color: #fff;
 width: 20vw;
 border: none;
 border-bottom: 1px solid gray;
 background-color: transparent;
 margin-top: 10%;
`

const StyledButton = Styled.button `
    background-color: rgb(0, 29, 61);
    border: none;
    color: #fff;
    padding: 5px;
    width: 80px;
    border-radius: 10px;
    font-weight: 900;
    margin-top: 5%;
    &:hover{
        opacity: 0.8;
    }
`

const Error = Styled.span `
color: #fff;
`

const Aside = Styled.div `
width: 60vw;
height: 100vh;
margin-top: 0;
background-color: #fff;
position: absolute;
`

const Image = Styled.img `
    width: 80%;
    position: absolute;
    top: 20%;
`

export {
    StyledForm,
    Title,
    StyledInput,
    StyledButton,
    Error,
    FormContainer,
    Aside,
    Image,
    }