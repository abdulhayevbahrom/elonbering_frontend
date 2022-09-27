import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './routes/home/Home';
import Cart from './routes/cart/Cart';
import SinglePage from "./routes/single-page/SinglePage";
import Admin from './routes/admin/Admin';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="app"> 
          <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/cart" component={Cart} />
          <Route  path="/admin" component={Admin} />
          <Route path="/products/:id" component={SinglePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
