const mongoose = require('mongoose');

// const Singer = mongoose.model('Singer', singerSchema);

const Singer = require('Singer');

const songSchema = mongoose.Schema({
	singer: [singerSchema]
	lyrics: String
});




module.exports = mongoose.model('Song', songSchema);

