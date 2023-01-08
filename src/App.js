import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from  './routes/home/Home'
import Login from './routes/login/Login'
import Cart from './routes/cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SinglePage from "./routes/single-page/SinglePage";
import Avtomobiles from "./routes/avtomobiles/Avtomobiles";
import Appliances from "./routes/appliances/Appliances";
import Electronics from "./routes/electronics/Electronics";
import Houses from "./routes/houses/Houses";
import Favorites from "./routes/favorites/Favorites";
import Mebels from "./routes/mebels/Mebels";
import Xostovarlar from "./routes/xostovarlar/Xostovarlar";
import Chorva from "./routes/chorva/Chorva";
import Register from "./routes/register/Register";

function App() {
  useEffect(()=>{
      window.addEventListener('offline', ()=>{
        toast.error("Tarmoqqa ulanmagansiz!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      });
    })
    
    window.addEventListener('online', ()=>{
      toast.success("Tarmoqqa ulangan", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      });
    })
  },[])

  return (
    <Router>
      <div className="app">
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/heart" component={Favorites} />
          <Route path="/cart" component={Cart} />
          <Route path= "/products/:id" component={SinglePage} />
          <Route path="/avtomobiles" component={Avtomobiles} />
          <Route path="/appliances" component={Appliances} />
          <Route path="/electronics" component={Electronics} />
          <Route path="/houses" component={Houses} />
          <Route path="/mebels" component={Mebels} />
          <Route path="/xostovarlar" component={Xostovarlar} />
          <Route path="/chorva" component={Chorva} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
