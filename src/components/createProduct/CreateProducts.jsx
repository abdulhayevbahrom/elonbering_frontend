import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import s from "./CreateProducts.module.css"


const CreateProducts = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [url, setUrl] = useState("")
  const [urls, setUrls] = useState([])
  const [kredit, setKredit] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")
  const [product, setProduct] = useState(null)


  const addUrls = (e) =>{
    e.preventDefault()
    if(!url){
      return alert("Image url is requared")
    }
    setUrls([...urls, url])
    setUrl("")
  }

  const createPro = (e) =>{
    e.preventDefault()
    const newPro = {title,price, url: urls, desc, kredit, category}
    axios.post("http://localhost:7000/products", newPro)
        .then(res => {
          setProduct(res.data)
          if(res.data.state){
            setTitle("")
            setPrice("")
            setUrls([])
            setDesc("")
            setKredit("")
          }
        })
        .catch(err => console.log(err))
  }

  return (
    <div className={s.createProduct}>
      <Link to="/">
      <h1 className={s.createLogo}>Elon Bering</h1>
      </Link>
      <div className={s.createInfo}><h1>Create Products</h1></div>
       <div className={s.createFormWrapper}>
       <h3 style={{color: product && product ? "green" : "red"}}>{product && product.msg}</h3>
        <form className={s.createForm} onSubmit={createPro}>
          <label htmlFor="">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" type="text" />
          <label htmlFor="">Price</label>
          <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="text" />
          <label htmlFor="">Credit</label>
          <input value={kredit} onChange={e => setKredit(e.target.value)} placeholder="Credit" type="text" />
          <label htmlFor="">Description</label>
          <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" type="text" />
          <label htmlFor="">Url</label>
          <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Url" type="text" />
          <button className={s.next_btn} onClick={addUrls}>Next</button>
          <select value={category} onChange={e => setCategory(e.target.value)}>
             <option value="">Select Category</option>
             <option value="phone">Phone</option>
             <option value="laptop">Laptop</option>
             <option value="tv">Tv</option>
             <option value="gamer">Gamer</option>
             <option value="garden">Garden</option>
             <option value="books">Books</option>
             <option value="mebel">Mebel</option>
             <option value="appliances">Appliances</option>
             <option value="popular">Popular</option>
             <option value="convenient">Convenient</option>
          </select>
         <button className={s.createBtn}>Create Product</button>
        </form>
        <div className={s.inputFileWrapper}>
        <input type="file" className={s.inputFile}/>
        <img src="https://cdn-icons-png.flaticon.com/512/1942/1942191.png" alt="" />
        <p>choose file</p>
        </div>
       </div>
    </div>
  )
}

export default CreateProducts