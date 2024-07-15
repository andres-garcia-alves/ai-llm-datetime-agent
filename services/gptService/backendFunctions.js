import sampleService from '../sampleService.js'
import { getBudgetAll, getBudgetExtended } from './budgets.js'

const functions = [
  {
    name: 'budget-all',
    description: 'Consultar presupuestos', // 'Look up for budgets'
    parameters: { }
  },
  {
    name: 'budget-extended',
    description: 'Consultar presupuestos',
    parameters: { }
  },
  {
    name: 'time-lookup',
    description: 'Buscar la hora actual en una ubicación determinada', // 'Look up the current time in a given location'
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

const parseGptResponse = async (auth, fnName, fnArgs) => {
  // console.log('parseGptResponse', auth, fnName, fnArgs)

  switch (fnName) {
    case 'budget-all':        return await getBudgetAll(auth)
    case 'budget-extended':   return await getBudgetExtended(auth, fnArgs)

    case 'time-lookup':       return await sampleService.timeLookup(fnArgs.location)
    default:                  return `ParseGptResponse(): No existe la función ${ fnName }.`
  }
}

export default { functions, parseGptResponse }
