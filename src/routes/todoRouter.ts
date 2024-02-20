import express, { Request, Response } from 'express'
const router = express.Router()

import { Todo } from '../types/Todo'
import todoEntries from '../data/todos.data'

router.get('/', (req: Request, res: Response) => {
  res.send(todoEntries as Todo[])
})

export default router
