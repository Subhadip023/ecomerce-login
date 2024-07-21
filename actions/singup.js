// actions/signup.js
'use server';

import {connectToDatabase} from '@/lib/momgodb'
import bcrypt from 'bcryptjs';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export const submitAction = async (formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const hashedPassword = await bcrypt.hash(password, 10);
console.log(name ,password)
 
};
