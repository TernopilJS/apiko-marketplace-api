import client from './';

export type Product = {
  id: string,
  title: string,
  description: string,
  image: string,
  price: number,
  created_at?: string,
  updated_at?: string,
};

export type ProductPatch = {
  title?: string,
  description?: string,
  image?: string,
  price?: number,
};

export function getProducts(): Promise<Product[]> {
  return client('products').select('*');
}

export function getProductsByIds(ids: []): Promise<Product[]> {
  return client
    .select('*')
    .from('products')
    .whereIn('id', ids);
}

export function getProductById(id: number): Promise<Product[]> {
  return client('products')
    .where({ id })
    .select();
}

export function removeProductById(id: number): Promise<Product[]> {
  return client('products')
    .where({ id })
    .del();
}

export function updateProductById(
  id: number,
  patch: ProductPatch,
): Promise<Product[]> {
  return client('products')
    .where({ id })
    .update(patch)
    .returning('*');
}

export function createProduct(
  product: ProductPatch,
): Promise<Product[]> {
  return client('products')
    .insert(product)
    .returning('*');
}
