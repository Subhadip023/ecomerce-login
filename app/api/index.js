// index.js or server.js
import express from 'express';
import signupRouter from './api/signup/router.js'; // Adjust path as needed

const app = express();

app.use(express.json()); // For parsing application/json

// Use the signup router
app.use('/api/signup', signupRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
