document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  // use the ${} select the date -- NASA documentation says select date
//   you have to add your api key to the url 
// read the DOCUMENTATION 
  const url = `https://api.nasa.gov/planetary/apod?api_key=me58bqFHlhDxqcz1XD0UcKO3ZYjFcg1naQfrsuRO&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // js dev tools in browser shows img comes from hdurl 
        document.querySelector('img').src = data.hdurl
        //
        document.querySelector('h3').innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


//use postman.co to test the url for the api