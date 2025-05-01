/***** LEGO *****/

const onFetchLegoClick = async () => {
    const data = await fetchLegoColors();
    renderLegoColors(data);
}

async function fetchLegoColors () {
    const response = await fetch("https://rebrickable.com/api/v3/lego/colors/?page_size=10&key=" + API_KEY);
    const data = await response.json();
    return data;
}

// Renders the lego colors in spans with the color as the background color
const legoContainer = document.getElementById("lego-container");
function renderLegoColors(data) {
    legoContainer.innerHTML = data.results.map(color => `
        <span
            class="text-white p-1 m-1 d-inline-block"
            style="background-color: #${color.rgb}"
        >
            ${color.name}
        </span>`
    ).join("");
}

/***** MOVIES *****/

async function onFetchMovieClick() {
    const data = await fetchMovie();
    renderMovie(data);
}

async function fetchMovie() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&type=movie&t=Empire+Strikes+Back`);
    const data = await response.json();
    return data;
}

const movieContainer = document.getElementById("movie-container");
function renderMovie(movie) {
    console.log(movie);
    movieContainer.innerHTML = `
        <div>
            <img class="img-thumbnail" src="${movie.Poster}">
            <h3>${movie.Title}</h3>
            <p>${movie.Plot}</p>
        </div>
    `
}