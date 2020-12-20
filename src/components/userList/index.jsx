import {useEffect, useState} from 'react';
import api from '../../services/api';
import {
    Table,
    TableRow,
    TableCell,
    Button,
    TableHead
} from './style';

const UserList = () =>{
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('authToken');
    useEffect(() =>{
        api.get('/users', {
            headers: {
                Authorization: token
            }
        })
        .then(res => setUsers(res.data))
    }, [])
    return(
        <Table>
            <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Feedbacks</TableHead>
            </TableRow> 
          {users.map((user, index) =>{
              return(
                  <TableRow>
                  <TableCell key={index}>{user.name}</TableCell>
                  <TableCell key={index}>{user.user}</TableCell>
                  <TableCell key={index}>{user.email}</TableCell>
                  <TableCell><Button>Feedbacks</Button></TableCell>
                  </TableRow>
              )
          })}
        </Table>
    )
}

export default UserList