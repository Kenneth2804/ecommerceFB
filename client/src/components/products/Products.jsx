import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getproducts} from "../../redux/actions/index.js"
import Card from './Card.jsx';

export default function Products() {
    
    const dispatch = useDispatch()
    const products = useSelector(state => state.products);


    useEffect(() =>{
        dispatch(getproducts());
        
    },[dispatch])
    
  return (
    <div className='listStyle'>
        {products.length > 0 ?(
            products.map(product =>(
                <Card key={product.id} product={product}></Card>
            ))
        ):
        <p>No hay productos</p>
        
        }
      
    </div>
  )
}
