const url = "http://localhost:3000/movies"
const movieInput = document.getElementById("movie-input").value
const movieList = document.getElementById('movie-list')
const form = document.getElementById('movie-form')

form.addEventListener("submit", event =>{
    const movieInput = document.getElementById("movie-input").value
    event.preventDefault()
    // console.log(movieInput)
    createNewMovie(movieInput)
})

function createNewMovie (){
    fetch (url,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: movieInput,
            body: movieInput,
        })
    })

        .then(response => response.json())
        .then(data => {
        renderNewMovie(data)
        })
    
}

function renderNewMovie(movieObj) {
    itemEl = document.createElement('li')
    itemEl.innerText = `${movieObj.title}`
    movieList.appendChild(itemEl)
}