const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 5000;

mongoose.connect('mongodb://goweek:goweek123@ds135760.mlab.com:35760/goweek-backend', {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(port, () => {
  console.log('Server started on port 3000');
});