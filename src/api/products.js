import { TOKEN } from '../utils/constants'

export const fetchProducts = () => {
    return fetch('https://api.react-learning.ru/products/',{
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
}
