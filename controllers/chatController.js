import gptChat from '../services/gptService.js'
import consoleLogger from '../middleware/consoleLogger.js'

const root = (req, res, next) => {
  res.status(200).json({ response: 'Chatbot API' })
}

const chat = async (req, res, next) => {
  const authorization = req.header('Authorization')
  const message = req.body.message

  if (!message) { return raiseError('Missing property: "message"', 500, next) }

  const response = await gptChat(authorization, message)
  consoleLogger.logResponse(response)

  res.status(200).json({ message: response })
}


const raiseError = (errorMsg, errorStatus, next) => {
  const error = new Error(errorMsg)
  error.status = errorStatus
  return next(error) 
}

export { root, chat }
