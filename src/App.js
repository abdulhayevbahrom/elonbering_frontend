import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from  './routes/home/Home'
import Login from './routes/login/Login'
import Cart from './routes/cart/Cart'
// import SinglePage from "./routes/single-page/SinglePage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login}/>
          {/* <Route path="/admin" component={Admin} /> */}
          {/* <Route path="/products/:id" component={SinglePage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
