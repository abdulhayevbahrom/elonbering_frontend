import React from 'react'
import './Favorites.css'
import Header from '../../components/Header/Header'
import Caption from '../../components/caption/Caption'
import Capitalize from '../../hooks/capitalize'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import ProductsContainer from '../../components/productsContainer/ProductsContainer'
import { useSelector } from 'react-redux'


function Favorites() {
  const { t } = useTranslation()
  const heart = useSelector(s => s.addToHeart)

  return (
    <div className='sevimlilar'>
      <Header />
      <Caption captionName={Capitalize(t("sevimlilar"))} />
      <div className="sevimlilar_wrapp">
        {
          heart ?
            <ProductsContainer allProducts={heart} />
            :
            <pre>
              <h1>Kechirasiz,</h1>
              <h1>Hozircha sevimli mahsulotlar yo'q</h1>

              <Link to='/'>Bosh sahifa</Link>
            </pre>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Favorites
