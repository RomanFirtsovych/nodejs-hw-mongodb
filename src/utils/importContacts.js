import mongoose from 'mongoose';
import fs from 'fs';
import dotenv from 'dotenv';
import Contact from '../models/Contact.js';

dotenv.config();

const importContacts = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error('MONGODB_URL is not defined in environment variables');
    }

    await mongoose.connect(process.env.MONGODB_URL);
    console.log('✅ MongoDB Connected!');

    const contactsData = JSON.parse(fs.readFileSync('contacts.json', 'utf-8'));
    await Contact.deleteMany();
    console.log('🗑 Старі контакти видалено.');

    await Contact.insertMany(contactsData);
    console.log('✅ Нові контакти імпортовані!');

    mongoose.connection.close();
    console.log('🔌 Підключення до MongoDB закрито.');
  } catch (error) {
    console.error('❌ Помилка імпорту:', error);
    mongoose.connection.close();
    process.exit(1);
  }
};

importContacts();
