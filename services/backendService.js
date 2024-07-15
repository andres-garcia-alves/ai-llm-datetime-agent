import axios from 'axios'

const baseUrl = 'http://200.49.152.162:8086/K2BAquaGlassAppWeb/api/'
const axiosInstance = axios.create({ baseURL: baseUrl })

const init = (auth) => {

  // common headears for all requests
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers['Content-Type'] = 'application/json'
      config.headers['user'] = auth.user
      config.headers['sesion'] = auth.sesion
      config.headers['Authorization'] = auth.authorization
      return config
    },
    (error) => { return Promise.reject(error) }
  )
}

const api = {
  presupuestos: {
    get: async () => { return await axiosInstance.get('pedidos/obtener') }
  }
}

export default { init, api }