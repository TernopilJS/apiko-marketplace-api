import { Router } from 'express';
import * as productRoute from './routes/productsRoute';

const router: Router = Router();

router.get('/products', productRoute.getProducts);
router.get('/products/:id', productRoute.getProductById);
router.delete('/products/:id', productRoute.removeProductById);
router.patch('/products/:id', productRoute.updateProductById);
router.post('/products', productRoute.createProduct);

export default router;
