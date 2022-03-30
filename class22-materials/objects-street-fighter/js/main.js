
// this is hand coded for sagat 
// { } is literal notation
let sagat = {}

// this are properties 

sagat.height = "175cm"
sagat.reach = '70cm'
sagat.weight = '60kl' 
sagat.record = '200W, 10L, 5D'

// these are methods 
sagat.uppercut= true
sagat.roundhouse = true
sagat.pushKick = true


// other way to do this  with implied method 

let sagat = {
    height:'175cm',
    reach:'70cm',
    weight:'60kl'
}


//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function makeSagat(uppercut, roundhouse, pushKick){
    // properties 
    this.uppercut = uppercut
    this.roundhouse = roundhouse
    this.pushKick=pushKick
    // methods 
    this.tko = function(){
        console.log('win by technical knock out')
    }
    this.winning = function(){
        console.log("Sagat won the fight")
    }
}

