import Styled from 'styled-components';

const StyledForm = Styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20vw;
    margin: 10px auto;
    align-items: center;
    position: relative;
    float: right;
    right: 10%;
    top: 70px;
`

const Title = Styled.h2 `
    font-size: 2.4rem;
    font-weight: 900;
    color: #fff;
`

const StyledInput = Styled.input `
 color: #fff;
 width: 20vw;
 background-color: transparent;
 border: none;
 border-bottom: 1px solid gray;
 margin-top: 10%;
`

const StyledTextArea = Styled.textarea `
 color: #fff;
 width: 20vw;
 background-color: transparent;
 border: none;
 border-bottom: 1px solid gray;
 margin-top: 10%;
`

const StyledButton = Styled.button `
    background-color: rgb(7, 23, 41);
    border: none;
    color: #fff;
    padding: 5px;
    width: 100px;
    border-radius: 10px;
    font-weight: 900;
    margin-top: 10%;
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
 background-color: #fff;
 position: absolute;
`

const Image = Styled.img `
    width: 60%;
    position: absolute;
    left: 10%;
    top: 10%;
`

export {
    StyledForm,
    Title,
    StyledInput,
    StyledButton,
    StyledTextArea,
    Error,
    Aside,
    Image,
    }