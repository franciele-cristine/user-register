import api from '../../services/api';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Pages from '../pagination';
import {
    Table,
    TableRow,
    TableCell,
    Button,
    TableHead
} from './style';

const FeedbackList = () =>{
    const params = useParams();
    const token = localStorage.getItem('authToken')
    const [feedbacks, setFeedbacks] = useState([]);
    const [lastIndex, setLastIndex] = useState(0)
    const [nextPage, setNextPage] = useState(7)

    useEffect(() =>{
        api.get(`users/${params.id}/feedbacks`,{
            headers: {
                Authorization: token
            }
        })
        .then(res => setFeedbacks(res.data))
    },[])

    const page = feedbacks.slice(lastIndex, nextPage);

    return(
        <>
        <Pages
        items={feedbacks}
        setLastIndex={setLastIndex}
        setNextPage={setNextPage}
        lastIndex={lastIndex}
        nextPage={nextPage}
        />
        <Table>
        <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Comentário</TableHead>
                <TableHead>Nota</TableHead>
            </TableRow> 
            {page.map((feedback, index) =>{
                return(
                    <TableRow key={index}>
                        <TableCell >{feedback.name}</TableCell>
                        <TableCell >{feedback.comment}</TableCell>
                        <TableCell >{feedback.grade}</TableCell>
                    </TableRow>
                )
            })}
        </Table>
        </>
    )
}

export default FeedbackList