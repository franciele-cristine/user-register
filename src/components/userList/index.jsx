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
    const token = localStorage.getItem('authToken');
    const [lastIndex, setLastIndex] = useState(0)
    const [nextPage, setNextPage] = useState(7)
    useEffect(() =>{
        api.get('/users', {
            headers: {
                Authorization: token
            }
        })
        .then(res => setUsers(res.data))
    }, [])

    const page = users.slice(lastIndex, nextPage);
        
    return(
        <>
        <Pages 
        items={users}
        setLastIndex={setLastIndex}
        setNextPage={setNextPage}
        lastIndex={lastIndex}
        nextPage={nextPage}
        />
        <Table>
            <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Feedbacks</TableHead>
            </TableRow> 
          {page.map((user, index) =>{
              return(
                <TableRow key={index}>
                    <TableCell >{user.id}</TableCell>
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