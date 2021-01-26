import "reflect-metadata";
import * as express from 'express';
import router from  './routes/routes';
import {  } from "./database/connection";


const app = express();
app.use(express.json());
app.use(router);


app.listen(3333,()=>{
    console.log('its running');
})