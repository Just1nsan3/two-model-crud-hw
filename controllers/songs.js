const express = require('express');
const router  = express.Router();
const Song  = require('../models/songs');

router.get('/', (req, res) => {
  Song.find({}, (err, foundSongs) => {
      res.render('Songs/index.ejs', {
        songs: foundSongs
      });
  });

});

router.get('/new', (req, res) => {
  res.render('songs/new.ejs');
});


router.get('/:id', (req, res) => {
  Song.findById(req.params.id, (err, foundSong) => {
    res.render('songs/show.ejs', {
      Song: foundSong
    });
  });
});

router.get('/:id/edit', (req, res) => {

  Song.findById(req.params.id, (err, foundSong) => {
    res.render('songs/edit.ejs', {
      song: foundSong
    });
  });

});

router.put('/:id', (req, res) => {
  Song.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedSong)=> {
    console.log(updatedSong, ' this is updatedSong');
    res.redirect('/songs');
  });
});


router.post('/', (req, res) => {
  console.log(req.body)
  Song.create(req.body, (err, createdSong) => {
    console.log(createdSong, ' this is the createdSong');
    res.redirect('/songs');
  });

});


router.delete('/:id', (req, res) => {

  Song.findByIdAndRemove(req.params.id, (err, deletedSong) => {
    console.log(deletedSong, ' this is deletedSong');
    res.redirect('/songs')
  })

});



module.exports = router;