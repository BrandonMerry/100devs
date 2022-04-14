//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class MakeNetflix{
    constructor(showLength,showGenre,showLanguage, showType) {
        this.length = showLength
        this.genre = showGenre
        this.language = showLanguage
        this.type = showType
    }
    changeSeason(){
        return("select your season")
    }
    changEpisode(){
        return("select your episode")
    }
    fullscreen(){
        return("enlarge the screen")
    }
}

// place the variable here 
let newBoys = new MakeNetflix('short', 'drama','english','series')