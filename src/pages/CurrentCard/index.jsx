import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCurrentProduct } from "../../api/currentProduct";
import { useAuth } from "../../hooks/useAuth";

export const CurrentCard = () =>{
  const { id } = useParams()
  const { token } = useAuth()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getCurrentProduct'],
    queryFn: async() =>{
      const res = await fetchCurrentProduct(token, id)
      const responce = await res.json()

      return responce
    }
  })

  if (isLoading) return <p>Идет загрузка</p>

  if (isError) return <p>Произошла ошибка: {error}</p>

    return(
        <div>
          <div className="row g-0 mt-4">
           <div className="col-md-4">
              <img src={data.pictures} className="img-fluid rounded" alt="photo" />
           </div> 
           <div className="col-md-8">
            <div className="card-body"> 
              <h1><strong>{data.name}</strong></h1>
              <p>{data.description}</p>
              <p><strong>Цена:</strong> {data.price} руб.</p>
              <p><strong>Количество на складе:</strong> {data.stock} шт.</p>
            </div> 
           </div>
          </div>
         </div>
    )
}
