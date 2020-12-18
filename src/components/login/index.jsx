import api from '../../services/api';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

 
const Login = () =>{
    const schema = yup.object().shape({
        user: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório").min(6, "Senha deve tern no mínimo 6 digitos")
    })
    const {handleSubmit, error, register} = useForm({
        resolver: yupResolver(schema)
    })
    const tryLogin = (data) =>{
        api.post('/authenticate', {...data})
            .then(res => localStorage.setItem('authToken', res.data.auth_token))
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(tryLogin)}>
                <label>Usuário</label>
                <input name="user" ref={register}/>
                <label>Senha</label>
                <input name="password" ref={register}/>
                <button type="submit">Login</button>
            </form>
            
        </div>
    )
}

export default Login 