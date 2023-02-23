import React, { useEffect, useState, memo } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from '../../assets/logo (2).png'
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { useTypewriter } from 'react-simple-typewriter'
import { useSelector } from 'react-redux'
import axios from '../../api/index'
import { useTranslation } from "react-i18next";
import Capitalize from '../../hooks/capitalize'

const Header = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "uz")
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const cart = useSelector(s => s.addToCart)
  const { text } = useTypewriter({
    words: [t("Damas"), t("Telefon"), t("Muzlatgich"), t("Uy"), t("Stol"), t("Sigir"), t("Noutbook")],
    loop: { Infinity },
    // typeSpeed: {1000},
    // deleteSpeed: {50},
    // delaySpeed{1000}
  })

  const [searched, setSearched] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])


  function searchFunction(value) {
    setShow(value)
    console.log(value);
    if (value !== '') {
      axios.post('/products/search', { productName: value })
        .then((res) => res.data.state && setSearched(res.data.innerData))
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="header">
      {/* <Link to="/"><img src={logo} className="logo" alt="" /></Link> */}
      <Link to="/" className='logo'>Elon Bering</Link>
      <div className="header_searchbar">
        <input type="search" placeholder={text} onChange={(e) => searchFunction(e.target.value)} />
        <div className="searched" style={{ display: show ? "block" : "none" }}>
          {
            searched.length && searched.map((item, index) =>
              <Link to={`/products/${item._id}`} key={index}>{Capitalize(item.title)}</Link>
            )
          }
        </div>
      </div>
      <div className="header_links">
        <label htmlFor="select" className='header_lang'>
          <IoLanguage />
          <select value={lang} id='select' onChange={(e) => setLang(e.target.value)}>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">eng</option>
          </select>
        </label>
        <Link to='/login' className="header_links_item">
          <FaUser />
          <p>{t("login")}</p>
        </Link>
        <Link to="/heart" className="header_links_item">
          <FaHeart />
          <p>{t("sevimlilar")}</p>
        </Link>
        <Link to="/cart" className="header_links_item">
          {cart.length ? <span>{cart.length}</span> : <></>}
          <FaShoppingCart />
          <p>{t("savat")}</p>
        </Link>
      </div>
    </div>
  )
}

export default memo(Header)