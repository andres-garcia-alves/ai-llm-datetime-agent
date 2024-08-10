
const root = (req, res, next) => {
  res.status(200).json({ response: 'Chatbot API' })
}

export { root }
