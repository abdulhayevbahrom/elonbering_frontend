import React from 'react'
import s from "./SubHeader.module.css"
import logo from "../../assets/logo.svg"
import { AiFillCaretDown } from "react-icons/ai"
import { ImPhone } from 'react-icons/im'

const SubHader = () => {
  return (
    <div className={s.subHeader}>
      <div className={s.sub_wrapper}>
        <div className={s.language}>
          <img src={logo} alt="" />
          <p>O'zb</p>
          <AiFillCaretDown />
        </div>
        <div className={s.sub_buttons}>
          <button>20% Chegirmalar</button>
          <button>10% Muddatli To'lov</button>
        </div>
        <div className={s.sub_collection}>
          <li>Bizga qo'shiling</li>
          <li>Yordam</li>
          <li>Sayt haritasi</li>
          <a href='tel:+998942029122'> <ImPhone /> <span>+998(94)202 91 22</span> </a>
        </div>
        {/* <a href="tel:+998942029122"><button className={s.call_btn}>Qo'ng'iroq qilishni so'rash</button></a> */}
      </div>
    </div>
  )
}

export default SubHader