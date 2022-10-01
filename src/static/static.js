import person from "../assets/subheaderimages/person.svg"
import compare from "../assets/subheaderimages/compare.svg"
import spark from '../assets/spark.png'
import home from '../assets/home.jfif'
import qurilishMollari from '../assets/xoztovar.jfif'
import chorva from '../assets/CHORVA.jfif'

export const headerData = [
    { id:0,
        img:person,
        title:"Kirish",
        link:"admin/createProduct"
    },
    { id:0,
        img:compare,
        title:"Taqqoslash",
        link:"compare"
    },
]



export const categoryData = [
    {
        id:0,
        img:spark,
        title:"Avtomashinalar",
        link:"avtomobiles"
    },
    {
        id:1,
        img:"https://olcha.uz/image/60x50/category/gTEdspBADkaKoLWlt6Tyc1XrGeJAiyfd8zwwP52GBOFDtAVnVtj4jDOwbCMz.png",
        title:"Maishiy Texnika",
        link:"appliances"
    },
    {
        id:2,
        img:"https://olcha.uz/image/60x50/category/LMk7YuQAzKqsUIBDfr4jRA2IEFsLPsyFkWAWFHYkwlQZ8WRVvWut5Heb8Dju.png",
        title:"Elektron jihozlar",
        link: "electronics"
    },
    {
        id:3,
        img:home,
        title:"Uy-joylar",
        link: "houses"
    },
    {
        id:4,
        img:"https://olcha.uz/image/60x50/category/FwbLWc8SYnihYCcCTQzGbOCBgowRWJrt8SHh3pWKaVp8YwCfvs48I6Hc9oms.",
        title:"Mebellar",
        link:"mebel"
    },
    {
        id:5,
        img:qurilishMollari,
        title:"Qurilish mollari",
        link:"xostovarlar"
    },
    {
        id:6,
        img:"https://olcha.uz/image/60x50/category/odtXyERULXCcAjKtJEb0kH7XBV0InZmmqAwRqk24I1zqtITNExpsa7wto6uN.png",
        title:"Kitoblar",
        link:"books"
    },
    {
        id:7,
        img:chorva,
        title:"Chorva mollari",
        link: "chorva"
    },
]
