import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './users.service';

const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    res.status(200).json({
      success: 'true',
      code: 200,
      message: 'successfully created user',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
