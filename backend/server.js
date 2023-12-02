// Import required modules
const express = require('express');
const color = require('colors');
const dotenv = require('dotenv').config();

// Import custom middleware and configuration
const { errorHandler } = require('./middleware/errormiddleware');
const connectDB = require('./config/db');

// Set the port for the Express server
const port = 5000;


// Connect to the MongoDB database
connectDB()
// Create an Express application
const app = express();


// Middleware to parse incoming JSON data
app.use(express.json())

// Middleware to parse incoming URL-encoded data
app.use(express.urlencoded({extended: false }))

/*app.get('/api/goals', (req,res) =>{
    //res.send("heyy")
    res.status(200).json({message:"request recieved"})
})*/

app.use('/api/goals', require('./ROUTES/goalRoutes')) 

app.use('/api/users', require('./ROUTES/userRoutes'));

// Apply the errorHandler middleware to handle error
app.use(errorHandler)


// Log a message when the server is successfully running
app.listen(port, () => console.log(`Server started on port ${port}`));
