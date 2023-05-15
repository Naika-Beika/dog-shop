
export const fetchProducts = (TOKEN, search) => {
    return fetch(`https://api.react-learning.ru/products/search?query=${search}`,{
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
}
