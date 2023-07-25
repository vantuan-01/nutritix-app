import axiosClient from './axiosClient'

const productsApi = {
  getAll() {
    const url = '/product/products'
    const response = axiosClient.get(url).then((res) => res.data)
    return response
  },
  getSingle(id: any) {
    const url = `/product/products/${id}`
    const response = axiosClient.get(url).then((res) => res.data)
    return response
  },
  getByPage(_page: number) {
    const url = `/product/products?_page=${_page}&_limit=9`
    const response = axiosClient.get(url).then((res) => res.data)
    return response
  },
  getFillterByCategory(filterName: string, page: number) {
    const url = `/product/products?_page=${page}&_limit=9&category=${filterName}`
    const response = axiosClient.get(url).then((res) => res.data)
    return response
  }
}

export default productsApi
