import api from '../../services/api';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const FeedbackList = () =>{
    const params = useParams();
    const token = localStorage.getItem('authToken')
    const [feedbacks, setFeedbacks] = useState([]);
    console.log(params)
    useEffect(() =>{
        api.get(`users/${params.id}/feedbacks`,{
            headers: {
                Authorization: token
            }
        })
        .then(res => setFeedbacks(res.data))
    },[])
    return(
        <ul>
            {feedbacks.map((feedback, index) =>{
                return(
                    <li key={index}>{feedback.name} | {feedback.comment} | {feedback.grade}</li>
                )
            })}
        </ul>
    )
}

export default FeedbackList