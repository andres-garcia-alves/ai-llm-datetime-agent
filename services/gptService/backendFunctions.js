import sampleService from '../sampleService.js'
import { getBudgetAll, getBudgetExtended } from './budgets.js'

const functions = [
  {
    name: 'budget-all',
    description: 'Consultar presupuestos',
    parameters: { }
  },
  {
    name: 'budget-extended',
    description: 'Consultar presupuestos, permite ordenar y limitar la cantidad de resultados.',
    parameters: {
      type: 'object',
      properties: {
        sortDesc: {
          type: 'boolean',
          description: 'Permite ordenar los resultados.' +
          'Se utiliza el valor "true" para ordenar de forma descendente y el valor "false" para ordenar de forma ascendente.'
        },
        limit: {
          type: 'number',
          description: 'Permite limitar la cantidad de resultados a obtener.' +
          'Debe ser el número de rasultados a obtener.'
        }
      },
      requiered: ['sortDesc', 'limit']
    }
  },
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

const parseGptResponse = async (auth, fnName, fnArgs) => {
  
  console.log('parseGptResponse', fnName, fnArgs)

  switch (fnName) {
    case 'budget-all':        return await getBudgetAll(auth)
    case 'budget-extended':   return await getBudgetExtended(auth, fnArgs)

    case 'time-lookup':       return await sampleService.timeLookup(fnArgs.location)
    default:                  return `ParseGptResponse(): No existe la función ${ fnName }.`
  }
}

export default { functions, parseGptResponse }
