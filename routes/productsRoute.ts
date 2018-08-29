import { Response, Request } from 'express';
import * as db from '../db/productsDb';

/**
 * 
 * @api {GET} /api/v1/products Get all products
 * @apiName GetProducts
 * @apiGroup Products
 * 
 * @apiSuccess (200) {[Product]} Array of products
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * [{
      id: 1,
      title: 'Apple iPhone 5 16Gb Black',
      description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
      image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
      price: 8457.0,
 * }]
 */
export async function getProducts(req: Request, res: Response) {
  try {
    const products: db.Product[] = await db.getProducts();

    res.json(products);
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

/**
 * 
 * @api {GET} /api/v1/products/:id Get product by id
 * @apiName GetProductByID
 * @apiGroup Products
 * 
 * 
 * @apiSuccess (200) {[Product]} Array of products
 * 
 * @apiParam  {Number} name description
 * 
 * @apiSuccessExample {[Product]} Success-Response:
 * [{
      id: 1,
      title: 'Apple iPhone 5 16Gb Black',
      description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
      image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
      price: 8457.0,
 * }]
 */
export async function getProductById(req: Request, res: Response) {
  try {
    const id: number = req.params.id;

    const products: db.Product[] = await db.getProductById(id);

    res.json(products);
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function removeProductById(req: Request, res: Response) {
  try {
    const id: number = req.params.id;

    await db.removeProductById(id);

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function updateProductById(req: Request, res: Response) {
  try {
    const id: number = req.params.id;
    const patch: db.ProductPatch = req.body;

    const products: db.Product[] = await db.updateProductById(
      id,
      patch,
    );

    res.json(products);
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const patch: db.ProductPatch = req.body;

    const products: db.Product[] = await db.createProduct(patch);

    res.json(products);
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}
