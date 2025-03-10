import dotenv from 'dotenv';
dotenv.config();
import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';

(async () => {
  await initMongoConnection();
  setupServer();
})();
