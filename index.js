const fetch = require('node-fetch');

const url = 'https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '22f844f865msh981957b4874470fp1a7235jsn8251ca897c41',
    'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));