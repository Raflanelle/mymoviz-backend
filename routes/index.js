var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const TOKEN = process.env.IMBD_TOKEN;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: TOKEN
    }
};

router.get('/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            res.json({ movies: data.results })
        })
  })



module.exports = router;
