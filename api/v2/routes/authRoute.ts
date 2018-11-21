import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import * as usersDb from '../db/usersDb';
import * as passwordsDb from '../db/passwordsDb';
import { JWT_SECRET } from '../../../constants';
import * as _ from 'lodash';

export type LoginParams = {
  email: string,
  password: string,
};

export async function login(req: Request, res: Response) {
  try {
    const params: LoginParams = req.body;

    const [user]: usersDb.User[] = await usersDb.findUser(
      params as usersDb.FindUserParams,
    );

    if (!user) {
      throw new Error('Wrong password or email');
    }

    const [passwordEntity]: passwordsDb.PasswordEntry[] =
      await passwordsDb.findUserPassword({ userId: user.id });

    const match = await bcrypt.compare(params.password, passwordEntity.hash);

    if (!match) {
      throw new Error('Wrong password or email');
    }

    const timestamp = new Date().getTime();
    const token = jwt.encode({ timestamp, id: user.id }, JWT_SECRET);

    res.json({ token, user });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Wrong password or email',
      internalError: err.message,
    });
  }
}

// TODO: Add logout which will add token to blacklist

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

    const [user]: usersDb.User[] = await usersDb.createUser(_.omit(params, 'password'));
    await passwordsDb.createPassword(
      { userId: user.id, hash: passwordHash } as passwordsDb.CreatePasswordEntryParams,
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);

    // TODO: Remove user if it's created without password

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

    // TODO: Send email with reset password details
    res.json({ success: true });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}
