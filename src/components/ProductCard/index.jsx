import React from "react";

export const ProductCard = ({ product }) =>{

    return (
        <div>
          <div className="card" style={{width: "18rem", marginBottom: 30}}>
            <img src={product.pictures} className="card-img-top" alt="photo" />
             <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Цена: {product.price}</p>
              <p className="card-text">Количество: {product.stock}</p>
              <a href="#" className="btn btn-primary">В корзину</a>
             </div>
           </div>
        </div>
    )
}
