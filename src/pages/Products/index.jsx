import { React, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../api/products";
import { TOKEN } from "../../utils/constants"

export const Products = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({ total: 0, products: [] })

    useEffect(() => {
      const token = localStorage.getItem(TOKEN)
      if(!token) navigate ('/signin')
    }, [navigate])

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
        <p>{data.total}</p>
        <div>
            {data.products.map(product => {
                return <p key={product._id}>{product.name}</p>
            })}
        </div>
    </div>
)
}