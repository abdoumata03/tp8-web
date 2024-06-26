import express, { urlencoded, json } from 'express'
import { config } from 'dotenv'
config()
import './config/db'
import connectToDB from './config/db'
import ItemRoutes, { PassportRouter } from './routes/ItemRoutes'
import { createServer } from 'http'
import Cors from 'cors'
import { Passport } from './models/Item'

const app = express()

connectToDB()

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(
  Cors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
    credentials: true,
  })
)

app.use('/items', ItemRoutes)
app.use('/passports', PassportRouter)

const server = createServer(app)

server.listen(process.env.SERVER_PORT || 4000, () => {
  console.log(
    'Server is running at http://localhost:' + (process.env.SERVER_PORT || 4000)
  )
})
