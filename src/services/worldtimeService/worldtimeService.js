import axios from 'axios'
import moment from 'moment-timezone'

const baseUrl = 'https://worldtimeapi.org/api/timezone/'
const axiosInstance = axios.create({ baseURL: baseUrl })


const timeLookup = async (location) => { // 'Buenos_Aires'

  const result = await axiosInstance.get(location)
  const data = result.data.datetime

  const datetime = moment.tz(data, location).format('DD/MM/yy HH:mm')
  const response = `El dia y hora actual en ${ location } es: ${ datetime }.`

  return { type: 'text', response: response }
}

export default { timeLookup }
