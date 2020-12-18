import api from '../../services/api';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {
    StyledForm,
    Title,
    StyledInput,
    StyledButton,
    StyledTextArea,
    Error,
    Aside,
    Image,
} from './style';
import registerImg from '../../images/register.svg';

const Register = () =>{
    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório').min(10, 'Minímo de 10 caracteres'),
        user: yup.string().required('Campo obrigatório').min(5, 'Minímo de 5 caracteres'),
        about: yup.string(),
        email: yup.string().email("E-mail inválido").required('Campo obrigatório'),
        cpf: yup.string().required('Campo obrigatório').matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido'),
        cellphone: yup.string().required('Campo obrigatório').matches(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/, 'Celular inválido'),
        address: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório').matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 
        "Campo deve conter pelo menos uma letra maiúscula, um caracter especial e um número."),
        password_confirmation: yup.string().required('Campo obrigatório').oneOf([yup.ref('password')], 
        'Confirmação de senha deve ser igual a senha'),
    })
    const {handleSubmit, errors, register} = useForm({
        resolver: yupResolver(schema)
    });
     const tryRegister = (data) =>{
         api.post('/users', {user: {...data}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
     }

    return(
        <>
            <Aside>
                <Image src={registerImg} alt="register image"/>
            </Aside>
            <StyledForm onSubmit={handleSubmit(tryRegister)}>
                <Title>Cadastro</Title>
                <StyledInput name="name" placeholder="Nome" ref={register}/>
                {errors.name && <Error>{errors.name.message}</Error>}
                <StyledInput name="user" placeholder="Usuário" ref={register}/>
                {errors.user && <Error>{errors.user.message}</Error>}
                <StyledTextArea name="about" placeholder="Sobre mim" ref={register}/>
                {errors.about && <Error>{errors.about.message}</Error>}
                <StyledInput name="email" placeholder="E-mail" ref={register}/>
                {errors.email && <Error>{errors.email.message}</Error>}
                <StyledInput name="cpf" placeholder="CPF" ref={register}/>
                {errors.cpf && <Error>{errors.cpf.message}</Error>}
                <StyledInput name="cellphone" placeholder="Celular" ref={register}/>
                {errors.cellphone && <Error>{errors.cellphone.message}</Error>}
                <StyledInput name="address" placeholder="Endereço" ref={register}/>
                {errors.address && <Error>{errors.address.message}</Error>}
                <StyledInput name="password" placeholder="Senha" ref={register}/>
                {errors.password && <Error>{errors.password.message}</Error>}
                <StyledInput name="password_confirmation" placeholder="Confirmação de senha" ref={register}/>
                {errors.password_confirmation && <Error>{errors.password_confirmation.message}</Error>}
                <StyledButton type="submit">Cadastrar</StyledButton>
            </StyledForm>
        </>
    )
}

export default Register