import api from '../../services/api';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {
    StyledForm,
    Title,
    StyledInput,
    StyledButton,
    Error,
    FormContainer,
    Aside,
    Image,
} from './style';
import LoginImg from '../../images/login.svg';
import {useHistory} from 'react-router-dom';

 
const Login = () =>{
    const history = useHistory();
    const schema = yup.object().shape({
        user: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório").min(6, "Senha deve tern no mínimo 6 digitos")
    })
    const {handleSubmit, errors, register} = useForm({
        resolver: yupResolver(schema)
    })
    const tryLogin = (data) =>{
        api.post('/authenticate', {...data})
            .then((res) => (
                localStorage.setItem('authToken', res.data.auth_token)),
                history.push('/users')
                )
            .catch(err => console.log(err))
    }

    return(
        <>
            <Aside>
                <Image src={LoginImg} alt="login image" />
            </Aside>
            <FormContainer>
                <StyledForm onSubmit={handleSubmit(tryLogin)}>
                    <Title>Login</Title>
                    <StyledInput name="user" placeholder="Usuário" ref={register}/>
                    {errors.user && <Error>{errors.user.message}</Error>}
                    <StyledInput name="password" placeholder="Senha" ref={register}/>
                    {errors.password && <Error>{errors.password.message}</Error>}
                    <StyledButton type="submit">Login</StyledButton>
                </StyledForm>
            </FormContainer>
        </>
    )
}

export default Login 