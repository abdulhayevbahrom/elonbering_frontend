import React from 'react'
import './Admin.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from '../../components/create/Create'
import AllProduct from '../../components/allProduct/AllProduct'
import { NavLink, Link } from 'react-router-dom'
import {useRouteMatch} from 'react-router-dom'



function Admin() {
  const {url} = useRouteMatch() 
    return (
        <Router>
            <div className='admin'>
                <div className="adminNavbar">
                    <Link  activestyle={{backgroundColor:"#000"}} className="admin_nav_Item" to="/">Home</Link>
                    <NavLink activeStyle={{backgroundColor:"#000"}} className="admin_nav_Item" to={`${url}/create`}>Yangi</NavLink>
                    <NavLink activestyle={{backgroundColor:"#000"}} className="admin_nav_Item" to={`${url}/allProduct`}>Barchasi</NavLink>
                </div>
                <Switch>
                    <Route path={`${url}/create`} component={Create} />
                    <Route path={`${url}/allproduct`} component={AllProduct} />
                </Switch>
            </div>
        </Router>
    )
}

export default Admin