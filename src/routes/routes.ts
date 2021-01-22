import {Router}from 'express';
import {List} from '../controller/productContoller';

const router = Router();

router.get('/',(req, res)=>{
    return res.json({message : "deu certo essa merda"});
})

router.get('/list', List);

export default router; 