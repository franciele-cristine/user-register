import {Link, useHistory} from 'react-router-dom';
import {
    Container,
    LinkContainer,
    StyledLink,
    LinkContainerUsers,
    StyledLinkIcons
} from './style';
import {RiLogoutBoxRLine} from 'react-icons/ri'
import {HiUsers} from 'react-icons/hi';

const Menu = () =>{
    const history = useHistory();
    const token = localStorage.getItem('authToken');
    const Logout = () =>{
        localStorage.removeItem('authToken');
        history.push('/');
    }
    return(
        <Container >
            {!token ? <LinkContainer>
                <StyledLink to="/register">Register</StyledLink>
                <StyledLink to="/">Login</StyledLink>
            </LinkContainer> :
            <LinkContainerUsers>
                <StyledLinkIcons to="/users"><HiUsers/></StyledLinkIcons>
                <StyledLinkIcons onClick={Logout}><RiLogoutBoxRLine/></StyledLinkIcons>
            </LinkContainerUsers>}
        </Container>
    )
}

export default Menu