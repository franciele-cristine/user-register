import Draggable from 'react-draggable'
import {
    Container,
    Title,
    Form,
    FormItem,
    Input,
    TextArea,
    Label,
    Button,
    Close,
} from './style';
import {GrFormClose} from 'react-icons/gr';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import api from '../../services/api';
import {useParams} from 'react-router-dom';

const NewFeedback = ({setOpen}) =>{

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        grade: yup.number('Digite apenas números').required('Campo obrigatório'),
        comment: yup.string(),
    })

    const token = localStorage.getItem('authToken');
    const {id} = useParams();
    const {handleSubmit, errors, register} = useForm({
        resolver: yupResolver(schema)
        
    })

    const sendFeedback = (data) => {
        api.post(`/users/${id}/feedbacks`, {feedback:{...data}}, {
            headers: {
                Authorization: token
            }
        })
        setOpen(false)
    }

    return(
        <Draggable>
            <Container>
                <Close><GrFormClose onClick={() => setOpen(false)}/></Close>
                <Title>New Feedback</Title>
                <Form onSubmit={handleSubmit(sendFeedback)}>
                    <FormItem>
                        <Label>Nome:</Label>
                        <Input name="name" ref={register}/>
                        {errors.name && <span>{errors.name.message}</span>}
                    </FormItem>
                    <FormItem>
                        <Label>Nota:</Label>
                        <Input type="number" name="grade" ref={register}/>
                        {errors.grade && <span>{errors.grade.message}</span>}
                    </FormItem>
                        <Label>Comentário</Label>
                        <TextArea name="comment" ref={register}/>
                        {errors.comment && <span>{errors.comment.message}</span>}
                    <Button type="submit" >Enviar</Button> 
                </Form>
                
            </Container>
        </Draggable>   
    )
}

export default NewFeedback