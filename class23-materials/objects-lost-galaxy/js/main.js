//Create a dog object that has four properties and three methods

// wet code

let dog = {
    fur = "short",
    size = 'medium',
    color = 'white with black spots',
    height = "short",
}

dog.wag = function(){console.log("im a happy dog")}
dog.bark = function(){console.log("give me food")}
dog.fetch = function(){console.log("returns ball")}


// dry code - with constructors 

function MakeDog(furLength, bodySize, furColor,dogHeight){
    this.fur = furLength
    this.size= bodySize
    this.color = furColor
    this.height = dogHeight
    this.wag=  function(){console.log("im a happy dog")}
    this.bark = function(){console.log("give me food")}
    this.fetch = function(){console.log("returns ball")}
}

let pitbull = new MakeDog('short','buff','grey','50cm')

let chow = new MakeDog('long','lean','white','tall')