import React from "react"

export const Home = () => {


    return (
      <div className="card mb-3" style={{background: "#E0FFFF", border: "none" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="13.png" className="img-fluid rounded-start" alt="photo" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>Добро пожаловать в магазин Dog Food!</h1>
              <p><strong>Здесь вы найдете:</strong></p>
                <p>Качественный корм для собак</p>
                <p>Лакомства</p>
                <p>Аксессуары</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  