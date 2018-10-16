import { Router } from 'express';
import * as productRoute from './productsRoute';
import * as authRoute from './authRoute';

const router: Router = Router();

router.get('/products', productRoute.getProducts);
router.get('/products/:id', productRoute.getProductById);
router.delete('/products/:id', productRoute.removeProductById);
router.patch('/products/:id', productRoute.updateProductById);
router.post('/products', productRoute.createProduct);
router.post('/auth/login', authRoute.login);
router.post('/auth/register', authRoute.register);
router.post('/auth/remember', authRoute.rememberPassword);

export default router;
