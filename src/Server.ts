import express, { Application, Request, Response } from 'express';
import cors from "cors"
import helmet from 'helmet';
import { Server } from './Index';
import { Dbconfig } from '../Config/DB';


const port: number = parseInt(process.env.PORT!) || 2310
const app: Application = express()

app.use(express.json())
app.use(cors({ origin: "*" }))
app.use(helmet())

Server(app)

app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.clear();
    console.log();
    console.clear()
    console.log(`Server running at https://chopprbe.onrender.com 😈😈👽`)
    Dbconfig()

})

