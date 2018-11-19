import { Response, Request } from 'express';
import * as User from '../db/usersDb';
import { sendSomethingWentWrongError } from '../errors';

export async function currentUser(req: Request, res: Response) {
  try {
    const { id } = req.user;

    const [user] = await User.findUserById(id);

    res.json({ user });
  } catch (err) {
    console.error(err.message);

    sendSomethingWentWrongError(res, err);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const [user] = await User.findUserById(id);

    res.json({ user });
  } catch (err) {
    console.error(err.message);

    sendSomethingWentWrongError(res, err);
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const params: User.PaginationParams = req.query;
    const users = await User.findAll(params);

    res.json(users);
  } catch (err) {
    console.error(err.message);

    sendSomethingWentWrongError(res, err);
  }
}

export async function removeById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await User.removeById(id);

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);

    sendSomethingWentWrongError(res, err);
  }
}

export async function updateById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const patch: User.UserPatch = req.body;

    const [product] = await User.updateById(id, patch);

    res.json({ product });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}
