import backendService from '../backendService.js'
import { formatCurrency, formatDate } from '../../utilities/utilities.js'

const getBudgetAll = async (auth) => {
  backendService.init(auth)

  const result = await backendService.api.presupuestos.get(auth)
  const data = result.data.data

  const response = data.reduce((acum, item) => {
    const total = formatCurrency(item.total)
    const date = formatDate(item.fechaCreado)
    return acum + `#${ item.id } (${ date }) ${ total }, `;
  }, '')

  return { type: 'TABULAR', response: response }
}

const getBudgetExtended = async (auth, args) => {
  backendService.init(auth)

  const result = await backendService.api.presupuestos.get(auth)
  let response = result.data.data

  // filtering
  /*response = response.filter(a => {
    return a 
  })*/

  // sorting
  response.sort((a, b) => {
    if (a.id < b.id)        return args.sortDesc ? 1 : -1
    else if (a.id > b.id)   return args.sortDesc ? -1 : 1
    else                    return 0
  })

  // limit results
  response = response.slice(0, args.limit || Number.MAX_VALUE);

  // reduce
  response = response.reduce(function (acum, item) {
    const total = formatCurrency(item.total)
    const date = formatDate(item.fechaCreado)
    return acum + `#${ item.id } (${ date }) ${ total }, `;
  }, '')

  response = response.substring(0, response.lastIndexOf(', '))

  return { type: 'TEXT', response: response }
}


export { getBudgetAll, getBudgetExtended }
