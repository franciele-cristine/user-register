import {useEffect, useState} from 'react';
import Pages from '../../components/pagination';
import api from '../../services/api';
import {
    Table,
    TableRow,
    TableCell,
    Button,
    TableHead
} from './style';
import {useHistory} from 'react-router-dom';

const UserList = () =>{
    const history = useHistory()
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [lastIndex, setLastIndex] = useState(0)
    const [nextPage, setNextPage] = useState(7)
    const token = localStorage.getItem('authToken');
    useEffect(() =>{
        api.get('/users', {
            headers: {
                Authorization: token
            }
        })
        .then(res => setUsers(res.data))
    }, [])

    const page = users.slice(lastIndex, nextPage);
    const totalPages = users.length / 7;

    const Next = () =>{
        if(pageNumber < totalPages){
            setPageNumber(pageNumber + 1)
            setLastIndex(lastIndex + 7)
            setNextPage(nextPage + 7)
        }  
    }

    const Prev = () =>{
        if(pageNumber > 1){
            setPageNumber(pageNumber - 1)
            setLastIndex(lastIndex - 7)
            setNextPage(nextPage - 7)
        } 
    }
        
    return(
        <>
        <Pages 
        pageNumber={pageNumber}
        previous={Prev}
        next={Next}
        />
        <Table>
            <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Feedbacks</TableHead>
            </TableRow> 
          {page.map((user, index) =>{
              return(
                <TableRow key={index}>
                    <TableCell >{user.name}</TableCell>
                    <TableCell >{user.user}</TableCell>
                    <TableCell >{user.email}</TableCell>
                    <TableCell><Button onClick={() => history.push(`/users/feedbacks/${user.id}`)}>Feedbacks</Button></TableCell>
                </TableRow>
              )
          })}
        </Table>
        </>
    )
}

export default UserList