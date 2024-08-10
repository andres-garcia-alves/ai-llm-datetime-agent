import worldtimeService from '../worldtimeService/worldtimeService.js'

const functions = [
  {
    name: 'time-lookup',
    description: 'Buscar la hora actual en una ubicación determinada.',
    parameters: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'La ubicación para buscar la hora. Ej. Beijing, China.' +
          'Debe estar en el nombre de la zona horaria, por ejemplo: Asia/Shangai, America/Bogota, Europe/Madrid, etc.'
        }
      },
      requiered: ['location']
    }
  }  
]

const parseResponse = async (fnName, fnArgs) => {
  // console.log('parseGptResponse', fnName, fnArgs)

  switch (fnName) {
    case 'time-lookup':       return await worldtimeService.timeLookup(fnArgs.location)
    default:                  return `ParseGptResponse(): No existe la función ${ fnName }.`
  }
}
  
export default { functions, parseResponse }
