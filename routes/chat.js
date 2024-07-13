import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Chatbot API' })
})

router.post('/chat', (req, res) => {
  res.status(200).send('asd')
})

export default router
