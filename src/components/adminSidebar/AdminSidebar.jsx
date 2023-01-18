import React from 'react'
import './AdminSidebar.css'
import logo from '../../assets/logo (2).png'
import { Link, NavLink } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'
import { GoDatabase } from 'react-icons/go'
import { FaUsers } from 'react-icons/fa'
import { FiBarChart } from 'react-icons/fi'


function AdminSidebar() {
  return (
    <div className='adminSidebar'>
      <Link to='/admin'>
        <img src={logo} alt="logo" className="adminSidebarLogo" />
      </Link>
      <div className="adminSidebarlinks">
        <NavLink to="/admin/createProduct" activeClassName='adminSidebarLinkItem_atcive'  className="adminSidebarLinkItem"><IoMdAdd/> Mahsulot qo'shish</NavLink>
        <NavLink to="/admin/allProducts" activeClassName='adminSidebarLinkItem_atcive'  className="adminSidebarLinkItem"><GoDatabase/> Barcha mahsulotar</NavLink>
        <NavLink to="/admin/allUsers" activeClassName='adminSidebarLinkItem_atcive'  className="adminSidebarLinkItem"><FaUsers/> Barcha foydalanuvchilar</NavLink>
        <NavLink to="/admin/statistika" activeClassName='adminSidebarLinkItem_atcive'  className="adminSidebarLinkItem"><FiBarChart/>Statistika</NavLink>
      </div>
    </div>
  )
}

export default AdminSidebar