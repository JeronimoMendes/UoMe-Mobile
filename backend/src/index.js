const express = require('express');

// middleware
const { knexMiddleware } = require('./middleware/database');

const app = express();

app.use(express.json());
app.use(knexMiddleware)

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log('Server on port: ' + PORT));
