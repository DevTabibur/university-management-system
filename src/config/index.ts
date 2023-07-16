import dotenv from 'dotenv';
import path from 'path';

// to handle env value from root directory
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_LOCAL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
};
