import express, { Application, Request, Response } from 'express'
import cors from 'cors';
const app: Application = express()
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json()) // parser
app.use(express.urlencoded({ extended: true }))  // parser

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;