import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import * as usersDb from '../db/usersDb';

export type LoginParams = {
  email: string,
  password: string,
};

export async function login(req: Request, res: Response) {
  try {
    const params: LoginParams = req.body;

    const [user]: usersDb.User[] = await usersDb.findUser(params as usersDb.FindUserParams);

    await bcrypt.compare(params.password, user.password);

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Wrong password or email',
      internalError: err.message,
    });
  }
}

export async function register(req: Request, res: Response) {
  try {
    const params: usersDb.CreateUserParams = req.body;

    const users: usersDb.User[] = await usersDb.findUser(
      { email: params.email } as usersDb.FindUserParams,
    );

    if (users.length > 0) {
      throw new Error('User already registered');
    }

    const passwordHash: string = await bcrypt.hash(
      params.password,
      10,
    );

    params.password = passwordHash;

    await usersDb.createUser(params);

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function rememberPassword(req: Request, res: Response) {
  try {
    const params: usersDb.FindUserParams = req.body;

    const [users]: usersDb.User[] = await usersDb.findUser(
      params,
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}
