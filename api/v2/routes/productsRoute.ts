import { Response, Request } from 'express';
import * as db from '../db/productsDb';

export async function getProducts(req: Request, res: Response) {
  try {
    let products: db.Product[] = [];

    if (req.query.ids) {
      products = await db.getProductsByIds(req.query.ids);
    } else {
      products = await db.getProducts();
    }

    res.json(products);
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

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
