import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

async function boostrap() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('db connection is successful')

    server = app.listen(config.port, () => {
      logger.info(`Applications is listening on PORT ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('mongodb is not connected', error)
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled rejection is detected, we are closing our server')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

boostrap()
