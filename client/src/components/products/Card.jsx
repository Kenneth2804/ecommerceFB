import React from 'react'
import "../../assets/css/card.css"

export default function Card ({product}) {
  const {name, type, size, color, image} = product;
  
    return (
    <div className='cardStyle'>
        <img src={image} alt={name} className='imageStyle'></img>
        <h2>{name}</h2>
        <p> Type: {type}</p>
        <p> Size: {size}</p>
        <p> Color: {color}</p>
    
    </div>
  )
}
