const express = require('express');
const router = require('./api/index');
// middleware
const { knexMiddleware } = require('./middleware/database');

const app = express();

app.use(express.json());
app.use(knexMiddleware);

const PORT = process.env.PORT || 4111;

app.use('/', router);

app.listen(PORT, console.log('Server on port: ' + PORT));
