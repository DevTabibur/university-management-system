import { Request, Response } from 'express'
import usersService from './users.service'

export const createUser = async (req: Request, res: Response) => {
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
    res.status(400).json({
      success: 'false',
      code: 400,
      message: 'failed to create user',
      error: error,
    })
  }
}

export default {
  createUser,
}
