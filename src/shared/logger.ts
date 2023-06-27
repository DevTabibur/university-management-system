import { createLogger, format, transports } from 'winston'
import path from 'path'
const { combine, timestamp, label, printf, prettyPrint } = format
import DailyRotateFile from 'winston-daily-rotate-file'

// Custom Format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toString()} ${hour}:${minutes}:${seconds} } [${label}] ${level}: ${message}`
})

// for info logger
const logger = createLogger({
  level: 'info', //logger level "info" / "warning" etc
  format: combine(
    label({ label: 'Programming - Hero' }),
    timestamp(),
    myFormat,
    prettyPrint() // comment it for getting results without object
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'UM-success-%DATE%.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

// for error logger
const errorLogger = createLogger({
  level: 'error', //logger level "info" / "warning" etc
  format: combine(
    label({ label: 'Programming - Hero' }),
    timestamp(),
    myFormat,
    prettyPrint() // comment it for getting results without object
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'UM-error-%DATE%.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export { logger, errorLogger }
