import './index.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Homepage from './pages/home';
import Profile from './pages/profile';
import Contact from './pages/contact';
import Navbar from './pages/navbar';
import CounterApp from './pages/counterApp';
function App() {
  return (
   <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'><Homepage /></Route>
          <Route exact path='/profile'><Profile /></Route>
          <Route exact path='/contact'><Contact /></Route>
          <Route exact path='/counterApp'><CounterApp /></Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;