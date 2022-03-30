//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

// make sure that you capitalize the first letter of the constructor 

function MakeSkater(skaterStyle, skaterClothes, skaterBoard,skaterHomeTown){
    this.style=skaterStyle
    this.clothes=skaterClothes
    this.skateboard=skaterBoard
    this.town=skaterHomeTown
    this.kickflip = function(){
        return "kicks board to rotate backwards during ollie"
    }
    this.noseGrind = function(){
        return"ollies, then puts nose of board on rail, slides along rail"
    }
    this.ollie = function(){
        return"jumps skatebaord off ground with a pop motion"
    }
}