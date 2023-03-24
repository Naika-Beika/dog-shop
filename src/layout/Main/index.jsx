import { useEffect } from "react"
import { CardList } from "../../components/CardList"

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI4ZGUiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ2LCJleHAiOjE3MTAzMzg0NDZ9.qwO_nZXjNVNE_w_DJCeUi0I6Jm--AVZJh1LjXQxREeg'

export const Main = () => {

    useEffect(() => {
      const fetchDataProducts = async () =>{
        const res = await fetch('https://api.react-learning.ru/products ',{
            headers:{
                Authorization: 'Bearer ' + TOKEN
            }
        })
        
        if(res.ok){
            const responce = await res.json();
            console.log(responce);
        }

        
      }
      fetchDataProducts()
    }, [])
    
   
    return (
        <main>
            <div className="d-flex justify-conten-center mb-5">
                <button type="button" className="btn btn-success">Goods</button>
            </div>
        
           <CardList />

        </main>
    )
}