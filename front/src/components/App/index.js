import { Switch, Route } from 'react-router-dom';

import Page from 'components/Page';
import Room from 'components/Room';
import Game from 'components/Game';
import './style.scss';

function App() {
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
