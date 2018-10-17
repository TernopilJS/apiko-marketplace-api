import { Router } from 'express';
import expressJwt from 'express-jwt';
import * as productRoute from './productsRoute';
import * as authRoute from './authRoute';
import { JWT_SECRET } from '../constants';

const router: Router = Router();

const requireAuth = expressJwt({
  secret: JWT_SECRET,
  userProperty: 'user',
});

const identifyUser = expressJwt({
  secret: JWT_SECRET,
  userProperty: 'user',
  credentialsRequired: false,
});

router.get('/products', identifyUser, productRoute.getProducts);
router.get(
  '/products/:id',
  identifyUser,
  productRoute.getProductById,
);
router.delete(
  '/products/:id',
  requireAuth,
  productRoute.removeProductById,
);
router.patch(
  '/products/:id',
  requireAuth,
  productRoute.updateProductById,
);
router.post('/products', requireAuth, productRoute.createProduct);
router.post('/auth/login', authRoute.login);
router.post('/auth/register', authRoute.register);
router.post('/auth/remember', authRoute.rememberPassword);

export default router;
