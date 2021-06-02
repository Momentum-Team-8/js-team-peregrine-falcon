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

form.addEventListener('click', event => {
    
})

function createNewMovie (movieInput){
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
        console.log(movieInput)
        })
    
}

function renderNewMovie(movieObj) {
    itemEl = document.createElement('li')
    buttonEl=document.createElement('button')
    itemEl.innerHTML = `${movieObj.title}`
    movieList.appendChild(itemEl)
    itemEl.appendChild(buttonEl)
    buttonEl.innerText = "Not Yet Watched"
}