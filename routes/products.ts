import { Response, Request } from 'express';
import db from '../db';

export async function getProducts(reg: Request, res: Response) {
  try {
    const products = await db('products').select('*');
    res.json(products);
  } catch (err) {
    res.status(500).json({
      errorMessage: 'Something went wrong',
    });
  }
}
