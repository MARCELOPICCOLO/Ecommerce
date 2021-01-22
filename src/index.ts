import "reflect-metadata";
import * as express from 'express';
import router from  './routes/routes';
import {createConnection} from 'typeorm';


const app = express();
app.use(router);
app.use(express.json());

createConnection();

app.listen(3333,()=>{
    console.log('its running');
})