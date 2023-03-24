export const CardItem = ({ good }) => {


    return (
      <div className="card mx-2">
        <img src={good.image} className="card-img-top" alt={good.title} />
        <div className="card-body">
        <h5 className="card-title">{good.name}</h5>
        <p className="card-text">{good.description}</p>
        <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    )
}