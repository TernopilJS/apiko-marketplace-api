import { Router } from 'express';
import * as productRoute from './productsRoute';

const router: Router = Router();

router.get('/products', productRoute.getProducts);
router.get('/products/:id', productRoute.getProductById);

export default router;
