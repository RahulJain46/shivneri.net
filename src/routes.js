import React from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { hashHistory } from 'react-router-dom';
import { browserHistory} from 'react-router'
import { HashRouter } from 'react-router-dom'
import App from './App';
import SignOut from './components/signOut';
import LogIn from './components/logIn';



export default (
<Router history={browserHistory}>
  <Route path="/App" components={App}>
    <Route path="/signout" components={SignOut} />
     <Route path="/login" components={LogIn} />
     </Route>
</Router>
);
