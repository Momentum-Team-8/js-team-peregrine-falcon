//const momentMin = require("./moment.min")

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


fetch(url)
    .then(response => response.json())
    .then(data => {
        for(let movie of data){
            renderNewMovie(movie)
        }
    })


function createNewMovie (movieInput){
    fetch (url,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: movieInput,
            body: movieInput,
            created_at: moment().format()
        })
    })

        .then(response => response.json())
        .then(data => {
        renderNewMovie(data)
        console.log(movieInput)
        })
    
}

function renderNewMovie(movieObj) {
    const itemEl = document.createElement('li')
    let buttonEl=document.createElement('button')
    buttonEl.id =`${movieObj.id}`
    itemEl.innerHTML = `${movieObj.title}`
    movieList.appendChild(itemEl)
    itemEl.appendChild(buttonEl)
    buttonEl.innerText = "Not Yet Watched"
    // document.getElementById(movieObj.id).innerText = "Watched" + " " + moment().format('l')
    buttonEl.addEventListener('click', event => {
        console.log(event.target.id)
        
        fetch(url, {
            method:"PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
            id: event.target.id,
            watched_at: moment().format()
               
            })
            
        })
        if (movieObj.watched_at=== true){
            document.getElementById(movieObj.id).innerText = "Watched" 
        }
        
        })
}