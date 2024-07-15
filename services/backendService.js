import axios from 'axios'

const baseUrl = 'http://200.49.152.162:8086/K2BAquaGlassAppWeb/api/'
const axiosInstance = axios.create({ baseURL: baseUrl })

const init = (authorization) => {
  // console.log('init', authorization)

  // common headears for all requests
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers['Content-Type'] = 'application/json'
      config.headers['Authorization'] = 'Bearer ' + authorization // + userConfig.getItem('token')
      config.headers['user'] = 'adsasadas' // userConfig.getItem('user')
      config.headers['sesion'] = 'qwewwewqr' // userConfig.getItem('sesion')
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