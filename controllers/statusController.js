
const status = (req, res, next) => {
  const status = process.env.STATUS
  res.status(200).json({ response: status })
}

export { status }
