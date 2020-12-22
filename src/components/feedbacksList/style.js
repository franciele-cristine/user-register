import styled from 'styled-components';

export const Title = styled.h1 `

`
export const Header = styled.div ` 
    width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Table = styled.table `
    margin: 2% auto;
    width: 90vw;
    color: #000;
    font-weight: 100;
    font-size: 1rem;
`
export const TableRow = styled.tr `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 50px;
`
export const TableCell = styled.td `
    display: flex;
    width: 30vw;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    margin-bottom: 2%;
    padding: 2%;
`
export const TableHead = styled.th `
    display: flex;
    width: 30vw;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 29, 61);
    color: #fff;
    margin-bottom: 2%;
    padding: 2%;
`
export const Button = styled.button `
    background-color: rgb(0, 29, 61);
    height: 50px;
    border: none;
    padding: 1%;
    color: #fff;
    font-weight: 900;
    &:hover{
        color: #00a2ff;
    }
`