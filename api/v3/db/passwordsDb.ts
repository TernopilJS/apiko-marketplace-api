import client from './';

export type FindPasswordParams = {
  userId: string,
};

export type PasswordEntry = {
  id: string,
  userId: string,
  hash: string,
  created_at?: string,
  updated_at?: string,
};

export type CreatePasswordEntryParams = {
  userId: string,
  hash: string,
};

export function findUserPassword(
  params: FindPasswordParams,
): Promise<PasswordEntry[]> {
  return client('passwords')
    .where({ userId: params.userId })
    .select();
}

export function createPassword(
  params: CreatePasswordEntryParams,
): Promise<void> {
  return client('passwords').insert(params);
}
