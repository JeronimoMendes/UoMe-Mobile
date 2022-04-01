const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log('Server on port: ' + PORT));
