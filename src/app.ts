// const express = require('express')
import express, { Application, Request, Response } from 'express';
const app : Application = express()
import cors from 'cors';
import router from './app/routes';
import GlobalErrorHandler from './app/middelwares/GlobalErrorHandler';
import NotFound from './app/middelwares/NotFound';
const port = 3000


//client side live link = https://car-reservation-system-client.vercel.app
//parser
app.use(express.json());
app.use(cors({
  origin:'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true}))

app.use("/api", router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Camper Shop!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(GlobalErrorHandler)

app.use(NotFound)

export default app;