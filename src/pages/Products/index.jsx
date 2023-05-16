import { React } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { fetchProducts } from "../../api/products";
import { ProductCard } from "../../components/ProductCard";
import { useAuth } from "../../hooks/useAuth";


export const Products = () => {
    const search = useSelector(state => state.filter.search)
    const { token } = useAuth()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['getAllProducts', search],
        queryFn: async () => {
          const res = await fetchProducts(token, search)
          const responce = await res.json()

          return responce;
        }
    })

    if (isLoading) return <p>Идет загрузка</p>

    if (isError) return <p>Произошла ошибка: {error}</p>
   
  return(
    <div>
        <h1>Каталог</h1>
        <div>
            {data.map(product => {
                return <ProductCard product={product} key={product._id} />
                /*<p key={product._id}>{product.name}</p>*/
            })}
        </div>
    </div>
)
}