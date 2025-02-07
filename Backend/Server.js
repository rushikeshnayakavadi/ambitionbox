const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User'); // Assuming you have a User model defined

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// MongoDB connection URI (use environment variable for better security)
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://User001:9SyA9PxQluCeBt65@cluster0.fnwu1.mongodb.net?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Route for user login and profile creation
app.post('/api/users/login', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    // Check if user exists in the database
    let user = await User.findOne({ username });

    if (!user) {
      // If user doesn't exist, create a new profile in the database
      user = new User({ username, password, role });
      await user.save();
      return res.status(201).send({ message: 'User profile created and logged in' });
    }

    // If user exists, return success message
    return res.status(200).send({ message: 'User logged in successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'An error occurred during login or profile creation' });
  }
});

// Default route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the AmbitionBox Clone Backend API');
});

// Set the server port
const PORT = process.env.PORT || 8000;
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});