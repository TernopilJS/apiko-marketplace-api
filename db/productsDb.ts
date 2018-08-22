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

export type Products = [Product];

export function getProducts(): Promise<Products> {
  return client('products').select('*');
}

export function getProductById(id: number): Promise<Products> {
  return client('products').where({ id }).select();
}

export function removeProductById(id: number): Promise<Products> {
  return client('products').where({ id }).del();
}
