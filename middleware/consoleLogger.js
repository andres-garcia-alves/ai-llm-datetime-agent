import colors from 'colors'

const logger = (req, res, next) => {
  const time =  `${ new Date().toLocaleDateString('es-AR', { day: "2-digit", month: "2-digit", year: "2-digit" }) } ` +
                `${ new Date().toLocaleTimeString('es-AR', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }) }`
  const request = `${ req.method } ${ req.protocol }://${ req.get('host')}${ req.originalUrl }`
  const message = `${ req.body.message }`

  console.log()
  console.log('TIME:          ', time)
  console.log('REQUEST:       ', request)
  console.log('MESSAGE:       ', message['yellow'])

  next()
}

const logResponse = (response) => {
  console.log('RESPONSE-TYPE: ', response.type['green'])
  console.log('RESPONSE-DATA: ')
  console.log(response.message['green'])
}

export default { logger, logResponse }
