import React from "react";
import "./Admin.css";
import AdminSidebar from '../../components/adminSidebar/AdminSidebar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateProducts from "../../components/createProduct/CreateProducts";
import AllProducts from '../../components/allProducts/AllProducts'
import AllUsers from '../../components/allUsers/AllUsers'
import Statistika from "../../components/statistika/Statistika";
import AdminHome from "../../components/adminHome/AdminHome";

function Admin() {
  return (
    <Router>
      <div className="admin">
        <AdminSidebar />
        <Switch>
          <Route exact path="/admin" component={AdminHome} />
          <Route path="/admin/createProduct" component={CreateProducts} />
          <Route path="/admin/allProducts" component={AllProducts} />
          <Route path="/admin/allUsers" component={AllUsers} />
          <Route path="/admin/statistika" component={Statistika} />
        </Switch>
      </div>
    </Router>
  );
}

export default Admin;