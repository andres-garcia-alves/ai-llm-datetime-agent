import express from 'express'
import { root, chat } from '../controllers/chatController.js'

const router = express.Router()

router.get('/', root)
router.post('/chat', chat)

export default router
