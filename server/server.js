const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const login = require('./routers/loginRouter');

app.use('/', login);

app.listen(port);