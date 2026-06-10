import { Router } from 'express';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import ProductController from './app/controllers/ProductController.js';
import multer from 'multer';
import multerConfig from './config/multer.cjs';
import authMiddleware from './app/middlewares/auth.js';
import CategoryController from './app/controllers/CategoryController.js';
import adminMiddleware from './app/middlewares/admin.js';
import OrderController from './app/controllers/OrderController.js';


const routes = new Router();

const upload = multer(multerConfig);

routes.post(
    '/users', 
    UserController.store);

routes.post(
    '/sessions', 
    SessionController.store);


routes.use(authMiddleware);

routes.post(
    '/products', 
    adminMiddleware, 
    upload.single('file'), 
    ProductController.store);

routes.put(
    '/products/:id', 
    adminMiddleware, 
    upload.single('file'), 
    ProductController.update);

routes.get(
    '/products', 
    ProductController.index);

routes.post(
    '/categories', 
    adminMiddleware, 
    upload.single('file'), 
    CategoryController.store);

routes.put(
    '/categories/:id', 
    adminMiddleware, 
    upload.single('file'), 
    CategoryController.update);

routes.get(
    '/categories', 
    CategoryController.index);

routes.post(
    '/orders', 
    adminMiddleware, 
    OrderController.store);

routes.put(
    '/orders/:id', 
    adminMiddleware,  
    OrderController.update);

routes.get(
    '/orders',
    OrderController.index);

export default routes;
