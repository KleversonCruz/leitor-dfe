import { BadRequest } from '../errors/bad-request';
import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let code = 500;

  if (error instanceof BadRequest) {
    code = 400;
  }

  res.status(code).json({
    message: error.message,
  });
}
