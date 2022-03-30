//Get a dog photo from the dog.ceo api and place the photo in the DOM

// fetch sends a request to the dog.ceo server
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) //parse (make sure it is) response in JSON 
    // now console.log what was requested from the server 
    .then(data =>{
        console.log(data.message)
        // passes the image url into the html for img
        document.querySelector('img').src = data.message
    })
    // if there is an error, console.log the error 
    .catch(err => {
        console.log(`error${err}`)
    });

    