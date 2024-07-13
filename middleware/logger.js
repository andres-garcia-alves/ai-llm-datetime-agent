const logger = (req, res, next) => {

  console.log()
  console.log('TIME:   ',
    new Date().toLocaleDateString('es-AR', { day: "2-digit", month: "2-digit", year: "2-digit" }),
    new Date().toLocaleTimeString('es-AR', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }))
  console.log('REQUEST:', `${ req.method } ${ req.protocol }://${ req.get('host')}${ req.originalUrl }`)
  console.log('MESSAGE:', req.body.message)

  next()
}

  /*const user = req.header('user');
  const session = req.header('sesion');
  const authorization = req.header('Authorization');
  console.log('user:   ', user)
  console.log('session:', session)
  console.log('token:  ', authorization)*/

export default logger
