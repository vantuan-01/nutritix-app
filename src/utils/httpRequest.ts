import axios from 'axios'

const httpRequest = axios.create({ baseURL: process.env.BASE_URL })

export const get = async (path: string) => {
  const response = await httpRequest(path)
  return response.data
}
