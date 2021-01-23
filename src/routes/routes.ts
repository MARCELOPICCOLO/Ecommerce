import {Router}from 'express';
import {List,Create, Update, Delete} from '../controller/productContoller'
import {getCategories,createCategory,updateCategory, deleteCategory} from '../controller/categoryController'

const router = Router();

//Product's routers
router.get('/list', List);
router.post('/create',Create);
router.put('/update/:id', Update);
router.put('/delete/:id',Delete);

//Category's routers
router.get('/categories', getCategories);
router.post('/createcategory', createCategory);
router.put('/updateCategory/:id',updateCategory);
router.get('/deleteCategory/:id', deleteCategory);


export default router; 
