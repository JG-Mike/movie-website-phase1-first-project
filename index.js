// my fetch api of choice for movies information
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '22f844f865msh981957b4874470fp1a7235jsn8251ca897c41',
		'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
	}
};

fetch('https://moviesdb5.p.rapidapi.com/om?t=Game%20of%20Thrones', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));


// function to fetch the API information
function data (){

}