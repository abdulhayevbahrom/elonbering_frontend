import React, { useState } from 'react'
import s from "./CreateProducts.module.css"
import { useTranslation } from 'react-i18next'
import { MdAddPhotoAlternate } from 'react-icons/md'
import axios from '../../api/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateProducts = () => {
  const { t } = useTranslation()

  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState(0)
  const [location, setLocation] = useState("")
  const [probeg, setProbeg] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [materialType, setMaterialType] = useState("")
  const [desc, setDesc] = useState("")
  const [images, setImages] = useState('')

  function sendToBack(e) {
    e.preventDefault()
    let formData = new FormData();

    // image yuklash
    Array.from(images).forEach((i) => {
      formData.append("images", i, i.name);
    });

    if (String(phoneNumber).length < 9 || String(phoneNumber).length > 9) {
      return alert("Telefon raqam ni 9x xxx xx xx holatda kiriting")
    }

    formData.append("title", title)
    formData.append("price", +price)
    formData.append("location", location)
    formData.append("color", color)
    formData.append("probeg", +probeg)
    formData.append("phoneNumber", phoneNumber)
    formData.append("category", category)
    formData.append("materialType", materialType === "" && "0")
    formData.append("desc", desc)
    formData.append("views", 0)
    formData.append("date", new Date())

    axios.post('/products', formData)
      .then(res => {
        console.log(" ress>>", res)
        if (res.data.state) {
          toast.success(res.data.msg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500
          })
        }
        else {
          toast.error(res.data.msg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500
          })
        }
      })
      .catch(res => {
        console.log("err>> ", res);
      })
  }

  return (
    <div className={s.createProduct}>
      <ToastContainer />
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

        <input disabled={!(category === "xostovarlar" || category === "mebels")} type="text" placeholder='material turi' value={materialType} onChange={e => setMaterialType(e.target.value)} />
        <input required type="text" placeholder='Mahsulot nomi' value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder='Mahsulot rangi' value={color} onChange={e => setColor(e.target.value)} />
        <input type="number" placeholder='Mahsulot narxi' required value={price} onChange={e => setPrice(e.target.value)} />
        <input disabled={!(category === "avtomobiles")} type="text" placeholder='Bosib otgan masofasi' value={probeg} onChange={e => setProbeg(e.target.value)} />
        <input type="text" placeholder='Mahsulot manzili' value={location} onChange={e => setLocation(e.target.value)} />
        <input type="number" pattern="[0-9]*" placeholder='Telefon raqam' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <textarea cols="30" rows="10" value={desc} onChange={e => setDesc(e.target.value)} placeholder="mahsulot haqida to'liqroq ma'lumot:"></textarea>
        <label className="chooseImames">
          <MdAddPhotoAlternate />
          <input type="file" accept="image/*" multiple onChange={e => setImages(e.target.files)} />
        </label>
        <input className={s.createBtn} type="button" onClick={sendToBack} value="Mahsulot Qo'shish" />
      </form>
    </div >
  )
}

export default CreateProducts