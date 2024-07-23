import express from 'express'
import { chat } from '../controllers/chatController.js'
import { root } from '../controllers/rootController.js'
import { status } from '../controllers/statusController.js'

const router = express.Router()

router.get('/', root)
router.post('/chat', chat)
router.get('/status', status)

export default router
