import {Link} from 'react-router-dom';

const Menu = () =>{
    return(
        <div>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default Menu