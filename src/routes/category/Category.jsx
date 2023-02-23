import React, { useEffect, useState } from 'react'
import Caption from '../../components/caption/Caption'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import axios from '../../api'
import ProductsContainer from '../../components/productsContainer/ProductsContainer'
import Categories from '../../components/categories/Categories'
import { useTranslation } from 'react-i18next'


function Category() {
    const { t } = useTranslation()
    const { pathname } = useLocation()

    const [loader, setLoader] = useState(false)
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        setLoader(true)
        axios.get(`/products/${pathname.slice(1)}`, { onDownloadProgress: (e) => { console.log(Math.round(e.loaded * 100 / e.total)) } })
            .then(res => {
                if (res.data.state) {
                    setAllProducts(res.data.innerData)
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }, [pathname])

    function captionTitle(caption) {
        return caption === "avtomobiles" ? t("Avtomobillar") :
            caption === "appliances" ? t("MaishiyTexnika") :
                caption === "electronics" ? t("Elektronjihozlar") :
                    caption === "houses" ? t("Uyjoylar") :
                        caption === "mebels" ? t("Mebellar") :
                            caption === "xostovarlar" ? t("QurilishMollari") :
                                caption === "chorva" ? t("Chorvamollari") : "not found title"
    }

    return (
        <div className='category'>
            <div className="home_navbar">
                <Header />
                <Categories />
            </div>
            <Caption captionName={captionTitle(pathname.slice(1))} />
            <ProductsContainer allProducts={allProducts} loader={loader} />
        </div>
    )
}

export default Category
