import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import globalErrorHandler from './app/middlewares/globalErrorHandler'

// middleware
app.use(cors())
app.use(express.json()) // parser
app.use(express.urlencoded({ extended: true })) // parser
// global error handler middleware
app.use(globalErrorHandler)

import usersRouter from './app/modules/users/users.router'

// Application routes
app.use('/api/v1/users', usersRouter)

// Testing
app.get('/', async (req: Request, res: Response) => {
  // throw new ApiError(400, 'Orre baba bishal Error')
  res.send('Hello World!')
})

export default app
