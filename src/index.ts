import "reflect-metadata";
import * as express from 'express';
import router from  './routes/routes';
import {createConnection} from 'typeorm';


const app = express();
app.use(express.json());
app.use(router);


createConnection();

app.listen(3333,()=>{
    console.log('its running');
})