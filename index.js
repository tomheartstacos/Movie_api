const express = require('express');
morgan = require('morgan');

const app = express();

app.use(morgan('common'));

topMovies = (topMovies.json);

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my Movie club!');
});

app.get('movies', (req, res) => {
  res.json(topMovies);
});

app.use('/documentation', express.static('public'));
});
let topMovies = [
    {"moviename":"Parasite",
    "rottenrank":"99%"},

    {"moviename":"Avengers",
    "rottenrank":"94%"},

    {"moviename":"Us",
    "rottenrank":"93%"},

    {"moviename":"Knives Out",
    "rottenrank":"97%"},

    {"moviename":"Toy Story 4",
    "rottenrank":"97%"},

    {"moviename":"The Irishman",
    "rottenrank":"96%"},

    {"moviename":"Little Women",
    "rottenrank":"95%"},

    {"moviename":"Booksmart",
    "rottenrank":"97%"},

    {"moviename":"The Farewell",
    "rottenrank":"98%"},

    {"moviename":"Marriage Story",
    "rottenrank":"99%"}
];
exports.topMovies = topMovies;

// use Morgan to log all requests

app.use(morgan('common'));

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

app.use((err, req, res, next) => {

});
