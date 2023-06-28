import { NextFunction, Request, Response } from 'express'
import usersService from './users.service'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: 'true',
      code: 200,
      message: 'successfully created user',
      data: result,
    })
  } catch (error) {
    next(400)
  }
}

export default {
  createUser,
}
