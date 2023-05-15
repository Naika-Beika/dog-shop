import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchProducts } from '../../api/products'

export const Catalog = () =>{
    const [data, setData] = useState({ total: 0, products: [] })

    useEffect(() =>{
        const fetchData = async () =>{
            try{
            const res = await fetchProducts()
            const responce = await res.json()
            
            if(res.status === 200){
                return setData(responce)
            }
            alert(responce.message)
        } catch (error) {
            alert(error)
        }
    }
    
        fetchData()
    }, [])

    return(
        <div>
            <h1>Каталог</h1>
            
            <div>
                {data.products.map(product => {
                    return <p key={product._id}>{product.name}</p>
                })}
            </div>
        </div>
    )
}