const build = (req) => {

  const auth = {
    user: req.header('user'),
    sesion: req.header('sesion'),
    authorization: req.header('Authorization')
  }

  // console.log('authentication', auth)
  return auth
}

export default { build }