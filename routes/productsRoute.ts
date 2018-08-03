import { Response, Request } from 'express';
import * as db from '../db/productsDb';

export async function getProducts(req: Request, res: Response) {
  try {
    const products: db.Products = await db.getProducts();

    res.json(products);
  } catch (err) {
    res.status(500).json({
      errorMessage: 'Something went wrong',
    });
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const id: number = req.params.id;

    const products: db.Products = await db.getProductById(id);

    res.json(products);
  } catch (err) {
    res.status(500).json({
      errorMessage: 'Something went wrong',
    });
  }
}
