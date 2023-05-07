const { Film } = require('../models/film');
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');

const FilmController = {
  getAllFilms: async (req, res) => {
    try {
      const films = await Film.findAll();
      res.status(200).json(films);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getFilmById: async (req, res) => {
    const { id } = req.params;
    try {
      const film = await Film.findByPk(id);
      if (!film) {
        res.status(404).json({ message: 'Film not found' });
      } else {
        res.status(200).json(film);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createFilm: async (req, res) => {
    const { title, description, releaseYear, languageId } = req.body;
    try {
      const film = await Film.create({
        title,
        description,
        release_year: releaseYear,
        language_id: languageId
      });
      res.status(201).json(film);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  updateFilm: async (req, res) => {
    const { id } = req.params;
    const { title, description, releaseYear, languageId } = req.body;
    try {
      const film = await Film.findByPk(id);
      if (!film) {
        res.status(404).json({ message: 'Film not found' });
      } else {
        const updatedFilm = await film.update({
          title,
          description,
          release_year: releaseYear,
          language_id: languageId
        });
        res.status(200).json(updatedFilm);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteFilm: async (req, res) => {
    const { id } = req.params;
    try {
      const film = await Film.findByPk(id);
      if (!film) {
        res.status(404).json({ message: 'Film not found' });
      } else {
        await film.destroy();
        res.status(204).json();
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = FilmController;
