import "reflect-metadata";
import * as express from 'express';
import router from  './routes/routes';
import { createConnection } from "typeorm";
import * as cors from 'cors';


createConnection()

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3333,()=>{
    console.log('its running');
});