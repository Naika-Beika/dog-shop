
export const fetchCurrentProduct = (TOKEN, id) => {
    return fetch(`https://api.react-learning.ru/products/${id}`,{
        headers: {
            Authorization: `Bearer ${TOKEN}`
          }
    })
}
