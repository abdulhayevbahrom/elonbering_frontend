import React from 'react'
import s from "./SubHeader.module.css"
import logo from "../../assets/logo.svg"
import {AiFillCaretDown} from "react-icons/ai"

const SubHader = () => {
  return (
    <div className={s.subHeader}>
     <div className={s.sub_wrapper}>
     <div className={s.language}>
        <img src={logo} alt="" />
        <p>O'zb</p>
        <AiFillCaretDown/>
      </div>
      <div className={s.sub_buttons}>
        <button>% Chegirmalar</button>
        <button>0% Muddatli To'lov</button>
      </div>
      <div className={s.sub_collection}>
        <li>Bizga qo'shiling</li>
        <li>Yordam</li>
        <li>Sayt haritasi</li>
        <h3>+998(71)202 2021 </h3>
      </div>
      <a href="tel:+998949111180"><button className={s.call_btn}>Qo'ng'iroq qilishni so'rash</button></a>
     </div>
    </div>
  )
}

export default SubHader