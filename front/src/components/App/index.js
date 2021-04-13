import { Switch, Route } from 'react-router-dom';

import Page from 'components/Page';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/room/:room">
          {/* Room Component */}
        </Route>
        <Route path="/:params">
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
