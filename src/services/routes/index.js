import {Switch, Route} from 'react-router-dom';
import Home from '../../pages/home';
import Register from '../../pages/register';
import Users from  '../../pages/users';

const Routes = () =>{
   return (
        <Switch>
            <Route path="/feedbacks"></Route>
            <Route path="/users"><Users/></Route>
            <Route path="/register"><Register/></Route>
            <Route path="/"><Home/></Route>
        </Switch>
    )
}

export default Routes