const express = require('express')

const port = process.env.port || 1337

const server = express()

// Import Routes


// Middlewares


// Routes


// Listening to the server
server.listen(port, () => {
    console.log("Server listening on port", port);
});