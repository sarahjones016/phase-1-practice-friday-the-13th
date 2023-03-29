//Fetch
const movieNavBar = document.getElementById("movie-list")
const detailImage = document.getElementById("detail-image")
const title = document.getElementById("title")
const yearReleased = document.getElementById("year-released")
const description = document.getElementById("description")
const watchedButton = document.getElementById("watched")
const bloodAmount = document.getElementById("amount")
const form = document.getElementById("blood-form")


fetch("http://localhost:3000/movies")
.then(function (res) {
    return res.json();
})
.then(function (data) {
    renderMovies(data)
    
    detailImage.src = data[0].image
    title.textContent = data[0].title
    yearReleased.textContent = data[0].release_year
    description.textContent = data[0].description
    if (data[0].watched === "false") {
        watchedButton.textContent = "Unwatched"
    } else {
        watchedButton.textContent = "Watched"
    }
    bloodAmount.textContent = data[0].blood_amount

    watchedButton.addEventListener("click", function() {
        if (watchedButton.textContent === "Watched") {
            watchedButton.textContent = "Unwatched"
        } else {
            watchedButton.textContent = "Watched"
        }
    })
})

function renderMovies(data) {
    for (const movie of data) {

    const navBarImage = document.createElement("img")
    navBarImage.src = movie.image
    movieNavBar.append(navBarImage)

    navBarImage.addEventListener("click", function() {

        detailImage.src = movie.image
        title.textContent = movie.title
        yearReleased.textContent = movie.release_year
        description.textContent = movie.description
        if (movie.watched === "false") {
            watchedButton.textContent = "Unwatched"
        } else {
            watchedButton.textContent = "Watched"
        }
        bloodAmount.textContent = movie.blood_amount
    })
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e.target["blood-amount"].value)

    bloodAmount.textContent =  parseInt(bloodAmount.textContent, 10) + parseInt(e.target["blood-amount"].value, 10)
})