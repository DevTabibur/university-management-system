import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('db connection is successful')

    app.listen(config.port, () => {
      logger.info(`Applications is listening on PORT ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('mongodb is not connected', error)
  }
}

boostrap()
