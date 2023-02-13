import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './routes/home/Home'
import Login from './routes/login/Login'
import Cart from './routes/cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SinglePage from "./routes/single-page/SinglePage";
import Register from "./routes/register/Register";
import Admin from "./routes/admin/Admin";
import Category from "./routes/category/Category";
import Favorites from "./routes/favorites/Favorites";

function App() {
  useEffect(() => {
    window.addEventListener('offline', () => {
      toast.error("Tarmoqqa ulanmagansiz!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      });
    })

    window.addEventListener('online', () => {
      toast.success("Tarmoqqa ulangan", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      });
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
          <Route path="/heart" component={Favorites} />
          <Route path="/products/:id" component={SinglePage} />
          <Route path="/avtomobiles" component={Category} />
          <Route path="/appliances" component={Category} />
          <Route path="/electronics" component={Category} />
          <Route path="/houses" component={Category} />
          <Route path="/mebels" component={Category} />
          <Route path="/xostovarlar" component={Category} />
          <Route path="/chorva" component={Category} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
