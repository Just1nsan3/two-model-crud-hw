const express = require('express');
const router  = express.Router();
const Singer  = require('../models/singers');

router.get('/', (req, res) => {
  Singer.find({}, (err, foundSingers) => {
      res.render('singers/index.ejs', {
        singer: foundSingers
      });
  });

});

router.get('/new', (req, res) => {
  res.render('singers/new.ejs');
});


router.get('/:id', (req, res) => {
  Singer.findById(req.params.id, (err, foundSinger) => {
    res.render('singers/show.ejs', {
      singer: foundSinger
    });
  });
});

router.get('/:id/edit', (req, res) => {

  Singer.findById(req.params.id, (err, foundSinger) => {
    res.render('singers/edit.ejs', {
      singer: foundSingers
    });
  });

});

router.put('/:id', (req, res) => {
  Singer.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedSinger)=> {
    console.log(updatedSinger, ' this is updatedSinger');
    res.redirect('/singers');
  });
});


router.post('/', (req, res) => {
  console.log(req.body)
  Singer.create(req.body, (err, createdSinger) => {
    console.log(createdSinger, ' this is the createdSinger');
    res.redirect('/singers');
  });

});


router.delete('/:id', (req, res) => {

  Singer.findByIdAndRemove(req.params.id, (err, deletedSinger) => {
    console.log(deletedSinger, ' this is deletedSinger');
    res.redirect('/singers')
  })

});



module.exports = router;