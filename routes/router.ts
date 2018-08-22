import { Router } from 'express';
import * as productRoute from './productsRoute';

const router: Router = Router();

router.get('/products', productRoute.getProducts);
router.get('/products/:id', productRoute.getProductById);
router.delete('/products/:id', productRoute.removeProductById);

export default router;
