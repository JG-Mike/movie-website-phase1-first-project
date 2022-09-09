// my fetch api of choice for movies information
document.addEventListener("DOMContentLoaded",() => {


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '22f844f865msh981957b4874470fp1a7235jsn8251ca897c41',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};
const url = 'https://movie-database-alternative.p.rapidapi.com/?s=frozen&r=json&page=1'
fetch (url,options)
    .then(response => response.json())
	.then(data => getData(data))
	.catch(err => console.error(err));



// using a function to get data from the API

 function getData(data){
	let moviePoster = document.createElement("li");
	moviePoster.className = "movieDisplay"
	moviePoster.innerHTML = `
		 <div class="movieDisplay">
                <h3> ${data.Title}}</h3>
        <img src="${data.Poster}" alt="">

    </div>
	`
	document.querySelector("movieData").appendChild(moviePoster)
}
	
})


	

// hoisting variable globally
const apiContainer = document.getElementById("apiContainer");
const image = document.getElementById("imageCard")


// getting the title of the movie the user is searching for through a function

const movieTitle = document.getElementById("submitForm").addEventListener("submit",
function getValue(title){
	title.preventDefault();
	const movieTitle = document.querySelector("input").value
	console.log (movieTitle)
	// console.log(getData(movieTitle))
	const result = getData(movieTitle)
	console.log (result)
})




