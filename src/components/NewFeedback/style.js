import styled from 'styled-components';

export const Container = styled.div `
    width: 40vw;
    height: 350px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(0, 29, 61, 0.5);
    z-index: 1;
`
export const Title = styled.h1 `
    color: #fff;
    margin-top: 0;
`
export const Form = styled.form ` 
    display: flex;
    width: 40vw;
    height: 200px; 
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const FormItem = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const Input = styled.input `
    width: 20vw;
    height: 20px;
    border: none;
`
export const TextArea = styled.textarea `
    width: 20vw;
    margin-left: 10%;
    resize: none;
` 
export const Label = styled.label `
    color: #fff;
    width: 50px;
`
export const Button = styled.button `
    background-color: rgb(7, 75, 148);
    border: none;
    padding: 2%;
    color: #fff;
    width: 80px;
    margin-left: 10%;
    &:hover{
        background-color: rgb(0, 29, 61)
    }
`
export const Close = styled.div `
    width: 38vw;
    text-align: right;
    font-size: 1.5rem;
`