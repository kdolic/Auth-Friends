import {Link, Route} from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute';

import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/'></Link>
        </li>
        <li>
          <Link to='/'></Link>
        </li>
      </ul>
      <Route path='/' component={App} />
      <Route path='/' component={Home} />
    </div>
  );
}

export default App;

