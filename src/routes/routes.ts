import {Router}from 'express';
import {getCustomers, createCustomer,updateCostumer, deleteCustomer} from '../controller/CustomerController'
import {getOrders,createOrder,getOrder} from '../controller/OrderController'
import {getCategories,createCategory,updateCategory, deleteCategory} from '../controller/categoryController'
import {getProducts,createProduct,updateProduct,deleteProduct} from '../controller/ProductController'
const router = Router();

//Product's routers
router.get('/getCustomers', getCustomers);
router.post('/createCustomer', createCustomer);
router.put('/updateCostumer/:id',updateCostumer);
router.get('/deleteCustomer/:id', deleteCustomer);

//Orders
router.get('/getOrders',getOrders);
router.post('/createOrder',createOrder)
router.get('/getOrder',getOrder)

//Category 
router.get('/getCategories',getCategories);
router.post('/createCategory',createCategory);
router.put('/updateCategory/:id',updateCategory);
router.get('/deleteCategory/:id',deleteCategory);

//Product
router.get('/getProducts', getProducts);
router.post('/createProduct',createProduct);
router.put('/updateProduct/:id',updateProduct);
router.get('/deleteProduct/:id',deleteProduct);

export default router; 
