// import { NextFunction, Request, Response } from 'express'
// import config from '../../config'

// //global error
// const globalErrorHandler = (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   type IGenericErrorMessage = {
//     path: string;
//     message: string;
//   }

//   let statusCode = 500
//   let message = 'something went wrong'
//   let errorMessages: IGenericErrorMessage[] = []

//   res.status(statusCode).json({
//     success: false,
//     message,
//     errorMessages,
//     stack: config.env !== 'production' ? err?.stack : undefined,
//   })

//   next()
// }

// export default globalErrorHandler
