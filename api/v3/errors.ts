import { Response } from 'express';

export function sendSomethingWentWrongError(
  res: Response,
  err: Error,
) {
  res.status(500).json({
    errorMessage: 'Something went wrong',
    internalError: err.message,
  });
}

export function sendUnauthorizedError(res: Response) {
  res.status(401).json({
    errorMessage: 'Unauthorized',
  });
}
