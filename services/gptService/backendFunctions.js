import backendService from '../backendService.js'
import sampleService from '../sampleService.js'

const functions = [
  {
    name: 'timeLookup',
    description: 'Look up the current time in a given location',
    parameters: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'The location to look up the time for. Eg. Beijing, China.' +
          'But must be on the TimeZone name, for instance: Asia/Shangai, America/Bogota, Europe/Madrid, etc.'
        }
      },
      requiered: ['location']
    }
  }
]

const parseGptResponse = async (authorization, functionName, functionArgs) => {
  // console.log('parseResponse:', functionName, functionArgs)
  backendService.init(authorization)

  switch (functionName) {
    case 'presupuestos':  return await backendService.api.presupuestos.get()
    case 'timeLookup':    return await sampleService.timeLookup(functionArgs.location)
    default:              return `ParseGptResponse(): No existe la función ${ functionName }.`
  }
}

export default { functions, parseGptResponse }
