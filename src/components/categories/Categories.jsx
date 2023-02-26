import React, { useState } from 'react'
import s from "./Categories.module.css"
import { Category } from "../../static/categories"
import { NavLink } from "react-router-dom"
import { FaBars } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

const Categories = () => {
  const [categoriesSidebarShow, setCategoriesSidebarShow] = useState(false)

  return (
    <div className={s.categories}>
      <FaBars onClick={() => setCategoriesSidebarShow(!categoriesSidebarShow)} className={s.categories_bars} />
      {
        Category()?.map((i, inx) => <NavLink exact activeClassName={s.categories_active} className={s.categories_item} key={inx} to={i.link}>{i.title}</NavLink>)
      }

      <div className={s.category_sidebar} style={{ display: categoriesSidebarShow ? "block" : "none" }}>
        <FiX className={s.categories_sidebar_X} onClick={() => setCategoriesSidebarShow(!categoriesSidebarShow)} />
        {
          Category()?.map((i, inx) => <NavLink onClick={() => setCategoriesSidebarShow(!categoriesSidebarShow)} exact activeClassName={s.categories_active} className={s.categories_sidebar_item} key={inx} to={i.link}>{i.title}</NavLink>)
        }
      </div>
    </div>
  )
}

export default Categories