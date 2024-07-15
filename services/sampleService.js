import axios from 'axios'
import { formatDateHour } from '../utilities/utilities.js'

const baseUrl = 'https://worldtimeapi.org/api/timezone/'
const axiosInstance = axios.create({ baseURL: baseUrl })


const timeLookup = async (location) => { // 'Buenos_Aires'

  const result = await axiosInstance.get(location)
  const datetime = formatDateHour(result.data.datetime)
  
  const response = `El tiempo actual en ${ location } es ${ datetime }.`
  return { type: 'TABULAR', message: response }
}

export default { timeLookup }