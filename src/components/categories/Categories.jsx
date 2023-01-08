import React from 'react'
import s from "./Categories.module.css"
import { Category } from "../../static/categories"
import {NavLink} from "react-router-dom"

const Categories = () => {

  return (
    <div className={s.categories}>
      {
        Category()?.map((i, inx) => <NavLink exact activeClassName={s.categories_active} className={s.categories_item}  key={inx} to={i.link}>{i.title}</NavLink>)
      }
    </div>
  )
}

export default Categories