import { Switch, Route } from 'react-router-dom';

import Page from 'components/Page';
import Room from 'containers/Room';
import Game from 'containers/Game';
import './style.scss';

import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { setLogged, setUser } from 'actions/user';

function App() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch()
  if(token){
    const decodedUser = jwt_decode(token,{ payload: true });
    const {id, pseudo, email, avatar, role} = decodedUser;
    console.log(decodedUser)
    dispatch(setLogged(true))
    dispatch(setUser(id, email, pseudo))
  }
  return (
    <div className="app">
      <Switch>
        <Route path="/game/:id">
          <Game />
        </Route>
        <Route path="/room/:room">
          <Room />
        </Route>
        <Route path="/page/:page">
          {/* Dynamically display of pages like Admin, Home, Signin, etc */}
          <Page />
        </Route>
        <Route exact path="/">
          {/* Display of Home component (default display of the component will be Home) */}
          <Page />
        </Route>
        <Route>
          {/* Error gestion */}
          <div>Error</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
