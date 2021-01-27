import "reflect-metadata";
import * as express from 'express';
import router from  './routes/routes';
import { createConnection } from "typeorm";

createConnection()

const app = express();
app.use(express.json());
app.use(router);


app.listen(3001,()=>{
    console.log('its running');
})