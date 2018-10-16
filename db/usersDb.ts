import client from './';

export type User = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  created_at?: string,
  updated_at?: string,
};

export type UserPatch = {
  firstName: string,
  lastName: string,
  email: string,
};

export type CreateUserParams = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};

export type FindUserParams = {
  email: string,
};

export function findUser(params: FindUserParams): Promise<User[]> {
  return client('users')
    .where({ email: params.email })
    .select();
}

export function createUser(user: CreateUserParams): Promise<User[]> {
  return client('users')
    .insert(user)
    .returning('*');
}
