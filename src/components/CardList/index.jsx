import { useEffect, useState } from "react"
import { CardItem } from "../CardItem"

export const CardList = () => {
  const [goods, setGoods] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    const res = await fetch (' http://localhost:3009/good')

    const responce = await res.json();

    setGoods(responce)
  }

  fetchData()
  }, [])

    return (
        <div className="d-flex justify-conten-center">
            {goods.map((good) => {
                return(<CardItem key={good.id} good={good} />)
            })}
        </div>
    )
}