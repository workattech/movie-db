const express = require("express");
const router = express.Router();

const moviesDb = require("./movie_data");

router.get("/", (req, res) => {
  const list = [];
  Object.keys(moviesDb).forEach((movieId) => {
    const data = moviesDb[movieId];
    list.push({ ...data, id: movieId });
  });
  res.send(list);
});

router.get("/:movieId", (req, res) => {
  const data = moviesDb[req.params.movieId];
  if (data) {
    res.send(data);
  } else {
    res.status(404).send();
  }
});

module.exports = router;
