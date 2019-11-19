export const {
  APP_PORT = 5000,
  NODE_ENV = 'development',
  MONGODB = 'mongodb://localhost:27017/uploads',
  SECRET = 'try to keep things simple'
} = process.env;

export const IN_PRODUCTION = NODE_ENV === 'production';
