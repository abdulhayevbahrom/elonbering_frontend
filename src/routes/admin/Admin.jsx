import React from 'react'
import s from "./Admin.module.css"
import { Switch, Route, Link } from 'react-router-dom'
import CreateProducts from '../../components/createProduct/CreateProducts'
import logo from "../../assets/logo.png"

const Admin = () => {

  return (
    <div className={s.admin}>
     <div className={s.adminLinks}>
     <Link to="/">
      <div className={s.logo}>
      <img src={logo} alt="" />
      </div></Link>
     </div>
      <div className={s.admin_content}>
        <Switch>
            <Route path="/admin/createProduct" component={CreateProducts}/>
        </Switch>
      </div>
    </div>
  )
}

export default Admin