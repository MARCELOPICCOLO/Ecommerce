import {Router}from 'express';
import {List,Create} from '../controller/productContoller';

const router = Router();

router.get('/list', List);
router.post('/create',Create);

export default router; 