import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useEffect } from 'react';
const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [LatestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])


  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            At our store, we believe that clothing is more than just fabric – it’s a way to express your personality and style.
            </p>
        </div>
      

    </div>
  )
}

export default LatestCollection
