const express = require('express');
const app = express();

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my Movie club!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use('/documentation', express.static('public'));
});

// use Morgan to log all requests

const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.get('/movies', (req, res) => {
  res.send('This is the movies folder.');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

// error handling function

const bodyParser = require('body-parser'),
  methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  // logic
});
