import React from 'react'
import s from "./Caption.module.css"
function Caption({captionName}) {
    return (
        <div className={s.products_caption}>
            <h2>{captionName ? captionName : "Sarlavha kiriting"}</h2>
            <div className={s.hr}></div>
        </div>
    )
}

export default Caption
