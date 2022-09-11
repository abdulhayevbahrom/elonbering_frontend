import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './routes/home/Home';
import Avtomobile from '../src/routes/avtomobile/Avtomobile';
import Houses from '../src/routes/houses/Houses';
import Mobile from '../src/routes/mobile/Mobile';
import MaishiyTexnikalar from '../src/routes/maishiyTexnikalar/MaishiyTexnikalar'
import Texnikalar from './routes/texnikalar/Texnikalar'
import Admin from './routes/admin/Admin';
import Mebellar from './routes/mebellar/Mebellar';
import OziqOvqat from './routes/oziqOvqat/OziqOvqat'
import Ishbor from './routes/ishbor/Ishbor'
import Login from '../src/routes/login/Login'
import BannerItemInfos from './components/bannerItemInfos/BannerItemInfos' 
import Register from './routes/register/Register'

function App() {
  console.log(window.innerWidth);
  return (
    <Router>
      <div className="app"> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/avtomobile" component={Avtomobile} />
          <Route path="/houses" component={Houses} />
          <Route path="/mobile" component={Mobile} />
          <Route path="/maishiyTexnikalar" component={MaishiyTexnikalar} />
          <Route path="/texnikalar" component={Texnikalar} />
          <Route path="/mebel" component={Mebellar} />
          <Route path="/oziqovqat" component={OziqOvqat} />
          <Route path="/admin" component={Admin} />
          <Route path="/ishbor" component={Ishbor}/>
          <Route path="/login" component={Login}/>
          <Route path="/infos" component={BannerItemInfos}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
