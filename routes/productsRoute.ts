import { Response, Request } from 'express';
import * as db from '../db/productsDb';

/**
 * 
 * @api {GET} /products Get all products
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
    const products: db.Products = await db.getProducts();

    res.json(products);
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
    });
  }
}

/**
 * 
 * @api {GET} /products/:id Get product by id
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

    const products: db.Products = await db.getProductById(id);

    res.json(products);
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
    });
  }
}
