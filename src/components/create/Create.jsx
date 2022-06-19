import React, { useState } from 'react'
import axios from 'axios'
import './Create.css'

function Create() {
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [year, setYear] = useState("")
  const [color, setColor] = useState("")
  const [manzil, setManzil] = useState("")
  const [price, setPrice] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [type, setType] = useState("avtomobile")
  const [maydoni, setMaydoni] = useState("")


  const sendToDataBase = (e) => {
    e.preventDefault()
    if(name === "" || manzil ==="" || phoneNumber==="" || price==="" || img===""){ alert("Ko'rsatilgan maydonlarni toldiring")}
    
    axios.post('http://localhost:7000/create/baza', {
      img: img,
      name: name,
      year: year,
      type: type,
      color: color,
      manzil: manzil,
      price: price,
      phoneNumber: phoneNumber,
      maydoni: maydoni
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

    setName("")
    setColor("")
    setPrice("")
    setImg("")
    setManzil("")
    setType("avtomobile")
    setYear("")
    setPhoneNumber("") 
    setMaydoni("") 
  }

  return (
    <div className='create'>
      <form onSubmit={sendToDataBase}>
        <input value={img} onChange={e => setImg(e.target.value)} type="text" placeholder='Rasm *' />
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Nomi *' />
        <input value={year} onChange={e => setYear(e.target.value)} type="number" placeholder='Yili' />
        <input value={color} onChange={e => setColor(e.target.value)} type="text" placeholder='Rangi' />
        <input value={manzil} onChange={e => setManzil(e.target.value)} type="text" placeholder='Manzili *' />
        <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder='Narxi *' />
        <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="number" placeholder='Telefon *' />
        <input value={maydoni} onChange={e => setMaydoni(e.target.value)} type="number" placeholder='maydoni'/>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="avtomobile">Avtomobile</option>
          <option value="uyjoy">Uy-joy</option>
          <option value="mobile">Mobile Texnikalar</option>
          <option value="maishiy">Maishiy Texnikalar</option>
          <option value="xizmat">Xizmat Texnikalari</option>
          <option value="oziqovqat">Oziq-ovqatlar</option>
          <option value="mebel">Mebellar</option>
        </select>
        <button style={name !== "" && price !== "" && manzil !== "" && phoneNumber !=="" && img !=="" ? {backgroundColor:"#00ff15", color:"#000"} : {backgroundColor:"red"}} type='submit'>Joylash</button>
      </form>
    </div>
  )
}

export default Create