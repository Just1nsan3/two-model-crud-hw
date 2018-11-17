const mongoose = require('mongoose');

const Song = require('Song');

const singerSchema = mongoose.Schema({
	name: String
	songs: [songSchema]
});

// const bodyParser = require('body-parser');

module.exports = mongoose.model('Singer', singerSchema);

