import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRouter from './routes/contacts.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(pino());

app.use('/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

const setupServer = () => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
};

export default setupServer;
