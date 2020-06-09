const express = require('express');
morgan = require('morgan');

const app = express();

app.use(morgan('common'));

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

app.use((err, req, res, next) => {

});
