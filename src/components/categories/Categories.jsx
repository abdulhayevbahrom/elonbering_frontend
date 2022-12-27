import React from 'react'
import s from "./Categories.module.css"
import { categories } from "../../static/categories"
import {NavLink} from "react-router-dom"

const Categories = () => {
  return (
    <div className={s.categories}>
      {
        categories?.map((i, inx) => <NavLink activeClassName={s.categories_active} className={s.categories_item}  key={inx} to={`/${i.link}`}>{i.title}</NavLink>)
      }
    </div>
  )
}

export default Categories