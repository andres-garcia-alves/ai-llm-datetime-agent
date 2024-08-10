const formatCurrency = (value) => {
  const options = { style: 'currency', currency: 'ARS', minimumFractionDigits: 2, maximumFractionDigits: 2 }
  return parseFloat(value).toLocaleString('es-AR', options)
}

const formatDate = (value) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  return new Date(value).toLocaleDateString('es-AR', options)
}

const formatDateHour = (value) => {
  if (value === undefined)        { return '' }
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', hour12: false, minute:'2-digit' }
  return new Date(value).toLocaleDateString('es-AR', options)
}

export { formatCurrency, formatDate, formatDateHour }
