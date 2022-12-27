import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from '../../assets/logo (2).png'
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { useTypewriter} from 'react-simple-typewriter'
import { useSelector } from 'react-redux'

const Header = () => {
  const cart = useSelector(s=>s.addToCart)
  const {text} = useTypewriter({
    words: ["Damas", "Telefon", "Muzlatgich", "Uy", "Stol", "Sigir","Noutbook"],
    loop: {Infinity},
    // typeSpeed: {1000},
    // deleteSpeed: {50},
    // delaySpeed{1000}
})
  return (
    <div className="header">
      <Link to="/"><img src={logo} className="logo" alt="" /></Link>

      <div className="header_searchbar">
        <input type="text" placeholder={text} autoFocus />
      </div>
      <div className="header_links">
        <label htmlFor="select" className='header_lang'>
          <IoLanguage />
          <select id='select'>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="eng">eng</option>
          </select>
        </label>
        <Link to='/login' className="header_links_item">
          <FaUser />
          <p>Login</p>
        </Link>
        <Link to="/heart" className="header_links_item">
          <FaHeart />
          <p>Sevimlilar</p>
        </Link>
        <Link to="/cart" className="header_links_item">
          <span>{cart.length}</span>
          <FaShoppingCart />
          <p>Savat</p>
        </Link>
      </div>
    </div>
  )
}

export default Header