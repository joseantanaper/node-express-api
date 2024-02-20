import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import todoRouter from './routes/todoRouter'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const router = express.Router()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api', router)
app.use('/api/todos', todoRouter)

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log('%s %s %s', req.method, req.url, req.path)
  next()
})

router.get('/', (req: Request, res: Response) => {
  res.send('/api')
})

app.use('/static', express.static('public'))
app.use('/nodejs', express.static('public/nodejs.png'))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.get('/ping', (req: Request, res: Response) => {
  res.send('Pong')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
