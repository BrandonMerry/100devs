//this is a template for all apis for the moment
//Example fetch using pokemonapi.co

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLocaleLowerCase()
  // use the ${} because this api doesnt have query parameters  
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//use postman.co to test the url for the api



