import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) =>{
  const navigate = useNavigate()

  const cardClick = () =>{
    return navigate (`${product._id}`)
  }

    return (
        <div>
          <div className="card" onClick={cardClick} style={{width: "18rem", height: "25rem", marginBottom: 30, cursor: "pointer"}}>
            <img src={product.pictures} className="card-img-top" alt="photo" />
             <div className="card-body">
              <h5 className="card-title" style={{height: "72px"}}>{product.name}</h5>
              <p className="card-text">Цена: {product.price}</p>
              <p className="card-text">Количество: {product.stock}</p>
              <a href="#" className="btn btn-primary">В корзину</a>
             </div>
           </div>
        </div>
    )
}
