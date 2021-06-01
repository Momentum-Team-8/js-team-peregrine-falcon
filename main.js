const url = "http://localhost:3000/movies"
const movieInput = document.getElementById("movie-input").value
const movieList = document.getElementById('movie-list')

document.addEventListener("submit-button", event =>{
    event.preventDefault()
    createNewMovie(movieInput)
})

function createNewMovie (){
    fetch (url,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify
        ({title: movieInput
        })
        .then(response => response.json())
        .then(data => {
            renderNewMovie(data)
        })
    }
        )
}

function renderNewMovie(movieObj) {
    itemEl = document.createElement('li')
    itemEl.innerText = `${movieObj.title}`
    movieList.appendChild(itemEl)
}