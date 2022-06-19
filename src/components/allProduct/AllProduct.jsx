import React, { useEffect, useState } from 'react'
import './AllProoduct.css';
import axios from 'axios';
// import { FiTrash } from 'react-icons/fi'
import loader from '../../assets/loader.svg' 

function AllProduct() {
  const [allData, setAllData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:7000/create/baza/allProduct')
      .then(res => setAllData(res.data))
      .catch(err => console.log(err))
  }, [])

  const DELETE_FROM_BAZA = (id) => {
    if (id) {
      axios.delete(`http://localhost:7000/create/baza/${id}`)
        .then(deletedFile => alert(deletedFile.data))
        .catch(error => console.log(error))
    }
  }

  return (
    <div className='allProducts' style={!allData.length ? {background:"#fff"} : {background:"#3b83f7"}}>
      <div className="banner_container">
        {
          !allData.length ?
            <img src={loader} alt="" />
            :
            allData.map((product, index) =>
              <div key={index} className="banner_item">
                <div className="banner_item_photo">
                  <img src={product.img} alt="avto" title={product.name} />
                </div>
                <div className="banner_item_info">
                  <p style={product.name.length >= 14 ? { fontSize: '14px' } : { fontSize: '16px' }} className='avtomobileName'>Nomi: <b>{product.name.split()[0].toLocaleUpperCase()} </b></p>
                  {product.color ?
                    <p className='avtomobileColor'>Rangi: <b>{product.color}</b></p>
                    : <></>
                  }
                  {product.year ?
                    <p className='avtomobileYear'>Yili: <b>{product.year}</b></p>
                    : <></>
                  }
                  <p className='productPrice'>Narxi: <b>{product.price}</b></p>
                  <p className='productPrice'>Manzil: <b>{product.manzil}</b></p>
                  <p className='authorNumber'>Tel: <b>+998{product.phoneNumber}</b></p>
                </div>
                <button className="trashBtn" onClick={() => DELETE_FROM_BAZA(product?._id)}>O'chirish</button>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default AllProduct