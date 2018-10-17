import { Response, Request } from 'express';
import * as usersDb from '../db/usersDb';

export async function currentUser(req: Request, res: Response) {
  try {
    const { id } = req.user;

    const [user]: usersDb.User[] = await usersDb.findUserById(id);

    res.json({ user });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}
