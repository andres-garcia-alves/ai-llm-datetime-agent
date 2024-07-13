const notFound = (req, res, next) => {
  const error = new Error('Path Not Found')
  error.status = 404
  next(error)
}

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message })
}

export { errorHandler, notFound } 
