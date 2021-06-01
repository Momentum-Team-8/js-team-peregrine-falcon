const url = "http://localhost:3000/movies"
const movieInput = document.getElementById("movie-input").value

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
    }
        )
}
