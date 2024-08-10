import express from 'express'
import { chat } from '../controllers/chatController.js'
import { root } from '../controllers/rootController.js'
import { status } from '../controllers/statusController.js'

const router = express.Router()

router.get('/', root)
router.get('/status', status)
router.post('/chat', chat)


export default router
