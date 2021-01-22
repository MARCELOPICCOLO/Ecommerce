import {Router}from 'express';
import {List,Create, Update, Delete} from '../controller/productContoller';

const router = Router();

router.get('/list', List);
router.post('/create',Create);
router.put('/update/:id', Update);
router.put('/delete/:id',Delete);

export default router; 