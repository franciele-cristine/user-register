import styled from 'styled-components';

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
    width: 18vw;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    margin-bottom: 2%;
    padding: 2%;
`
export const TableHead = styled.th `
    display: flex;
    width: 20vw;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 29, 61);
    color: #fff;
    margin-bottom: 2%;
    padding: 2%;
`
export const Button = styled.button `
    background-color: transparent;
    border: none;
    color: rgb(0, 29, 61);
    font-weight: 900;
    &:hover{
        color: #00a2ff;
    }
`