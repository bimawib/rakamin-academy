var express = require('express');
var router = express.Router();

const FilmController = require('../controllers/FilmController');

router.get('/', function() {
    res.send('INI FILM BOS');
});
router.get('/:id', FilmController.getFilmById);
router.post('/', FilmController.createFilm);
router.put('/:id', FilmController.updateFilm);
router.delete('/:id', FilmController.deleteFilm);

module.exports = router;
