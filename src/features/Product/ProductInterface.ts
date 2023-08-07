export interface paginationType {
  _page: number
  _limit: number
  _totalRows: number
}

export interface filterType {
  type: string
  name: string
}

export interface listProductType {
  data: productsType
}

export interface productsType {
  id: number
  brand: string
  name: string
  price: number
  sale: number
  imageUrl: string
  flavor: []
  description: string
  ingredients: string
  subImages: []
}
