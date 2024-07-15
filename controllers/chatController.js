import authentication from '../authentication.js'
import gptService from '../services/gptService.js'
import consoleLogger from '../middleware/consoleLogger.js'

const root = (req, res, next) => {
  res.status(200).json({ response: 'Chatbot API' })
}

const chat = async (req, res, next) => {

  const auth = authentication.build(req)
  const message = req.body.message

  if (!auth.user)           { return raiseError('Missing header: "user"', 500, next) }
  if (!auth.sesion)         { return raiseError('Missing header: "sesion"', 500, next) }
  if (!auth.authorization)  { return raiseError('Missing header: "authorization"', 500, next) }
  if (!message)             { return raiseError('Missing property: "message"', 500, next) }

  const response = await gptService.chat(auth, message)
  consoleLogger.logResponse(response)

  res.status(200).json(response)
  //res.status(200).json({ response: response })
}


const raiseError = (errorMsg, errorStatus, next) => {
  const error = new Error(errorMsg)
  error.status = errorStatus
  return next(error) 
}

export { root, chat }
