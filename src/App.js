import React from 'react';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import UserInfo from './components/UserInfo';
import EditUserInfo from './components/EditUserInfo';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/users' component={UsersList}/>
          <Route path='/add_user' component={AddUser}/>
          <Route exact path='/users/:id' component={UserInfo}/>
          <Route path='/users/:id/edit' component={EditUserInfo}/>
        </Switch>
      </Router>
    );
  }
  
}

export default App;
