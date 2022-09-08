// my fetch api of choice for movies information
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '22f844f865msh981957b4874470fp1a7235jsn8251ca897c41',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
	.then(response => response.json())
	.then(data => movieData(data))
	.catch(err => console.error(err));

// hoisting variable globally
const apiContainer = document.getElementById("apiContainer");
const image = document.getElementById("imageCard")


// getting the title of the movie the user is searching for
document.getElementById("submitForm").addEventListener("submit",
function getValue(title){
	title.preventDefault();
	const movieTitle = document.querySelector("input").value
	console.log (movieTitle)
})




// function to fetch the API information
// function movieData (data){
// 	 image.src = data.Poster
//     //  const title  = data.title;
// 	//  const plot = data.plot
// 	 console.log (`${poster}`)
// }