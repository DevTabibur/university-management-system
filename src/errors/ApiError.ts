// different way to handle error
class ApiError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string | undefined, stack = '') {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor) // statusCode, error.message => send hobe 2 ta params hisabe
    }
  }
}

export default ApiError
