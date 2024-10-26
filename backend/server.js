const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS middleware
const ruleRoutes = require('./routes/ruleRoutes'); // Adjust the path as necessary

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

// Use the rule routes
app.use('/api/rules', ruleRoutes); // This makes your routes accessible under /api/rules

// Connect to your MongoDB (adjust the connection string as necessary)
mongoose.connect('mongodb://localhost:27017/rule-engine', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((error) => console.error('MongoDB connection error:', error));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
