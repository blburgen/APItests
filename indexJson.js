const moviesContainer = document.getElementById("movies-container");

async function onFetchMoviesClick() {
    const response = await fetch("http://localhost:3005/movies");
    const movieList = await response.json();

    moviesContainer.innerHTML = movieList.map(
        movie => `<div class="bg-light rounded mt-5">
            <h3>${movie.title}</h3>
            <p>${movie.genreId}</p>
        </div>`
    ).join("");   
}

let lastCreatedItem = null;

async function onCreateMovieClick() {
    const testMovie = {title: "Test", genreId: 1 };
    const response = await fetch("http://localhost:3005/movies", {
        method: "POST", //create
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(testMovie)
    })
    const newlyCreatedItem = await response.json();
    lastCreatedItem = newlyCreatedItem;
}

async function onUpdateMovieClick() {
    if(lastCreatedItem === null){
        console.log("No item created yet to update");
        return;
    }
    fetch("http://localhost:3005/movies/" + lastCreatedItem.id, {
        method: "PUT", //create
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({title: "Test Updated", genreId: 2})
    })
    
}

async function onDeleteMovieClick() {
    if(lastCreatedItem === null){
        console.log("No item created yet to delete");
        return;
    }
    fetch("http://localhost:3005/movies/" + lastCreatedItem.id, {
        method: "DELETE", //create
    })
    
}