import { Router } from 'express';
import * as productRoute from './products';

const router: Router = Router();

router.get('/products', productRoute.getProducts);

export default router;
