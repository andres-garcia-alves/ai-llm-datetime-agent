import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import corsOptions from './middleware/cors-options.js'
import logger from './middleware/logger.js'
import chat from './routes/chat.js'

const __filename = fileURLToPath(import.meta.url); // path to the file
const __dirname = path.dirname(__filename); // name of the directory


const app = express()

// request body parsers
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// cors
app.use(cors(corsOptions))

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// logger middleware
app.use(logger)

// routes
app.use('/chatbot/api', chat)

// server
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server running on port ${ port }`))
