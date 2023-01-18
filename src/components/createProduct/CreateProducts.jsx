import React, { useState } from 'react'
import s from "./CreateProducts.module.css"
import { useTranslation } from 'react-i18next'
import {MdAddPhotoAlternate} from 'react-icons/md'

const CreateProducts = () => {
  const { t } = useTranslation()

  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [rangi, setRangi] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")
  const [yurgan, setYurgan] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [materialType, setMaterialType] = useState("")
  const [desc, setDesc] = useState("")
  const [images, setImages] = useState([])


  return (
    <div className={s.createProduct}>
      <h1>Mahsulot qo'shish</h1>
      <form className={s.createForm}>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Mahsulot turi</option>
          <option value="avtomobiles">{t('Avtomobillar')}</option>
          <option value="appliances">{t("MaishiyTexnika")}</option>
          <option value="electronics">{t("Elektronjihozlar")}</option>
          <option value="houses">{t("Uyjoylar")}</option>
          <option value="mebels">{t("Mebellar")}</option>
          <option value="xostovarlar">{t("QurilishMollari")}</option>
          <option value="chorva">{t("Chorvamollari")}</option>
        </select>

        <input type="text" placeholder='Mahsulot nomi' value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder='Mahsulot rangi' value={rangi} onChange={e => setRangi(e.target.value)} />
        <input type="text" placeholder='Mahsulot narxi' value={price} onChange={e => setPrice(e.target.value)} />
        <input type="text" placeholder='Mahsulot manzili' value={location} onChange={e => setLocation(e.target.value)} />
        <input type="text" placeholder='Bosib otgan masofasi' value={yurgan} onChange={e => setYurgan(e.target.value)} />
        <input type="text" placeholder='Telefon raqam' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <input type="text" placeholder='material turi' value={materialType} onChange={e => setMaterialType(e.target.value)} />
        <textarea cols="30" rows="10" value={desc} onChange={e => setDesc(e.target.value)} placeholder="mahsulot haqida to'liqroq ma'lumot"></textarea>
        <label className="chooseImames">
          <MdAddPhotoAlternate/>
          <input type="file" accept="image/*" multiple value={images} onChange={e => setImages(e.target.value)} />
        </label>
        <input className={s.createBtn} type="button" value="Mahsulot Qo'shish" />
      </form>
    </div>
  )
}

export default CreateProducts