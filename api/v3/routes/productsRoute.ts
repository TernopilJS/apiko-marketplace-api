import { Response, Request } from 'express';
import * as Product from '../db/productsDb';
import { sendSomethingWentWrongError } from '../errors';

export async function getProducts(req: Request, res: Response) {
  try {
    let products: Product.Product[] = [];

    if (req.query.ids) {
      products = await Product.getProductsByIds(req.query.ids);
    } else {
      const params: Product.PaginationParams = req.query;
      products = await Product.getProducts(params);
    }

    res.json(products);
  } catch (err) {
    console.error(err.message);

    sendSomethingWentWrongError(res, err);
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const products = await Product.getProductById(id);

    res.json(products);
  } catch (err) {
    console.error(err.message);

    sendSomethingWentWrongError(res, err);
  }
}

export async function removeProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await Product.removeProductById(id);

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);

    sendSomethingWentWrongError(res, err);
  }
}

export async function updateProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const patch: Product.ProductPatch = req.body;

    const products = await Product.updateProductById(id, patch);

    res.json(products);
  } catch (err) {
    console.error(err.message);

    sendSomethingWentWrongError(res, err);
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const patch: Product.ProductPatch = req.body;

    const products = await Product.createProduct(patch);

    res.json(products);
  } catch (err) {
    console.error(err.message);

    sendSomethingWentWrongError(res, err);
  }
}
