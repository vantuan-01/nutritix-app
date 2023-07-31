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
  getByPage(_page: number, _sort?: string) {
    const url = `/product/products?_page=${_page}&_limit=9&_sort=${_sort}`
    const response = axiosClient.get(url).then((res) => res.data)
    return response
  },
  getFilterByCategory(filterType: string, filterName: string, page: number, _sort?: string) {
    const url = `/product/products?_page=${page}&_limit=9&${filterType}=${filterName}&_sort=${_sort}`
    const response = axiosClient.get(url).then((res) => res.data)
    return response
  }
}

export default productsApi
