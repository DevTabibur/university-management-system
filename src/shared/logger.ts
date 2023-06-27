import { createLogger, format, transports } from 'winston'
import path from 'path'
const { combine, timestamp, label, printf, prettyPrint } = format

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
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
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
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
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
