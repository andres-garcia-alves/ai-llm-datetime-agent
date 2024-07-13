
const authentication = (req, res, next) => {
  const user = req.header('user');
  const session = req.header('sesion');
  const authorization = req.header('Authorization');

  // console.log('User:   ', user)
  // console.log('Session:', session)
  // console.log('Token:  ', authorization)
}

export default authentication