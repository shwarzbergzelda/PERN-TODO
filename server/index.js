const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

// Middleware
app.use(cors());
app.use(express.json())

// Routes

// Create a TODO

// Get all TODOs

// Get a TODO

// Update a TODO

// Delete a TODO

app.listen(5000, () => {
    console.log("server has started on port 5000")
});