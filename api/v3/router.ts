import { Router, Request, Response, NextFunction } from 'express';
import expressJwt from 'express-jwt';
import * as productRoute from './routes/productsRoute';
import * as authRoute from './routes/authRoute';
import * as usersRoute from './routes/usersRoute';
import * as User from './db/usersDb';
import { JWT_SECRET } from '../../constants';
import { sendUnauthorizedError } from './errors';

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

async function isAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.user;

    const [user] = await User.findUserById(id);

    if (user.role === 'admin') {
      next();
    } else {
      sendUnauthorizedError(res);
    }
  } catch (err) {}
}

const onlyForAdmins = [identifyUser, isAdmin];

// Products
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

// Users
router.get('/users/current', requireAuth, usersRoute.currentUser);
router.get('/users/:id', requireAuth, usersRoute.getById);
router.get('/users', requireAuth, usersRoute.getAll);
router.delete('/users/:id', onlyForAdmins, usersRoute.removeById);
router.patch('/users/:id', onlyForAdmins, usersRoute.updateById);

// Auth
router.post('/auth/login', authRoute.login);
router.post('/auth/register', authRoute.register);
router.post('/auth/remember', authRoute.rememberPassword);

export default router;
