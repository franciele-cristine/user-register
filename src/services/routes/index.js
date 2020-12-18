import {Switch, Route} from 'react-router-dom';
import Home from '../../pages/home';
import Register from '../../pages/register';

const Routes = () =>{
   return (
        <Switch>
            <Route path="/feedbacks"></Route>
            <Route path="/users"></Route>
            <Route path="/register"><Register/></Route>
            <Route path="/"><Home/></Route>
        </Switch>
    )
}

export default Routes