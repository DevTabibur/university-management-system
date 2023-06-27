import winston from 'winston'
import path from 'path'

// for info logger

const logger = winston.createLogger({
  level: 'info', //logger level "info" / "warning" etc
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})

// for error logger
const errorLogger = winston.createLogger({
  level: 'error', //logger level "info" / "warning" etc
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})

export { logger, errorLogger }

// folder should be
// logs/winston
// success.log
// error.log
