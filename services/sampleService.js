import axios from 'axios'

const baseUrl = 'https://worldtimeapi.org/api/timezone/'
const axiosInstance = axios.create({ baseURL: baseUrl })


const timeLookup = async (location) => { // 'Buenos_Aires'

  const response = await axiosInstance.get(location)
  const { datetime } = response.data

  return `El tiempo actual en ${ location } es ${ datetime }.`
}

export default { timeLookup }