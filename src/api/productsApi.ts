import axiosClient from './axiosClient'

const productsApi = {
  getAll() {
    const url = '/product/products'
    const response = axiosClient.get(url).then((res) => res.data)
    return response
  }
}

export default productsApi
