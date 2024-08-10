import gptService from '../services/gptService/gptService.js'
import consoleLogger from '../middleware/consoleLogger.js'

const chat = async (req, res, next) => {

  const message = req.body.message

  if (!message) { return raiseError('Missing property: "message"', 500, next) }

  const response = await gptService.chat(message)
  consoleLogger.logResponse(response)

  res.status(200).json(response)
  // res.status(200).json({ response: response })
}


const raiseError = (errorMsg, errorStatus, next) => {
  const error = new Error(errorMsg)
  error.status = errorStatus
  return next(error) 
}

export { chat }
