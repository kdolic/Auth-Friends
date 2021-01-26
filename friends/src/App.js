import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';
import  PrivateRoute  from './components/PrivateRoute';


import Home from './components/Home';
import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';

import './App.css';

function App() {
let history = useHistory();

// const logout = () => {
//   localStorage.removeItem('token');
//   history.push('/');
// }
  
  return (
    <Router>
    <div className="App">
      <ul>
      <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/login'>Login</Link>
        </li>
        {/* <li>
          <button onClick={logout}>Log Out</button>
        </li> */}
      </ul>
      <Switch>
        <PrivateRoute exact path='/friends' component={FriendList} />
        <Route path='/login' component={LoginForm} />
        <Route path='/'component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

