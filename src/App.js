import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './routes/home/Home';

function App() {
  return (
    <Router>
      <div className="app"> 
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
