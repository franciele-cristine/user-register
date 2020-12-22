import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import {
    Container,
    Button,
    Number,
} from './style';

const Pages = ({pageNumber, next, previous}) =>{
    return(
        <Container>
           <Button onClick={previous}><AiOutlineArrowLeft/></Button> 
           <Number>{pageNumber}</Number>
           <Button onClick={next}><AiOutlineArrowRight/></Button> 
        </Container>
    )
}

export default Pages