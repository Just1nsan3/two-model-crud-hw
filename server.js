const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


const singersController = require('./controllers/singers.js');
app.use('/singers', singersController);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

const songsController = require('./controllers/songs.js');
app.use('/songs', songsController);




app.listen(3000, () => {
	console.log('app is running port 3000')
});
