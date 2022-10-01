import React from 'react'
import s from "./Category.module.css"
import { categoryData } from "../../static/static"
// import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom"

const Category = () => {
  const location = useLocation()

  if (location.pathname === "/admin" || location.pathname === "/admin/editProducts" || location.pathname === "/admin/createProduct" || location.pathname === "/admin/edit-product" || location.pathname === "/cart") {
    return <></>
  }
  return (
    <div className={s.category}>
      {/* <BiChevronLeftCircle className={s.category_chevrons} /> */}
      {
        categoryData?.map((i, inx) =>
          <Link key={inx} to={`/${i.link}`}>
            <div className={s.box}>
              <img src={i.img} alt="" />
              <p>{i.title}</p>
            </div>
          </Link>
        )
      }
      {/* <BiChevronRightCircle className={s.category_chevrons} /> */}
    </div>
  )
}

export default Category