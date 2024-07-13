const root = (req, res, next) => {
  res.status(200).json({ response: 'Chatbot API' })
}

const chat = (req, res, next) => {
  if (!req.body.message) { return raiseError('Missing property: "message"', 500, next) }



  res.status(200).json({ response: 'bien' })
}


const raiseError = (errorMsg, errorStatus, next) => {
  const error = new Error(errorMsg)
  error.status = errorStatus
  return next(error) 
}

export { root, chat }
