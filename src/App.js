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

function App() {
  return (
    <Router>
      <div className="app"> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/avtomobile" component={Avtomobile} />
          <Route exact path="/houses" component={Houses} />
          <Route exact path="/mobile" component={Mobile} />
          <Route exact path="/maishiyTexnikalar" component={MaishiyTexnikalar} />
          <Route exact path="/texnikalar" component={Texnikalar} />
          <Route exact path="/mebel" component={Mebellar} />
          <Route exact path="/oziqovqat" component={OziqOvqat} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
