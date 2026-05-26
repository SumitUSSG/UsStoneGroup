const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route — confirms the server is alive
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend is running!', 
    business: 'US Stone Group - Westminster',
    timestamp: new Date()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});