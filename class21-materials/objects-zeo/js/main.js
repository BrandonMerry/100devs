//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.currentDate = "12th of September"
stopwatch.color = "black"
stopwatch.buttons = 4
stopwatch.light= fales

stopwatch.timer = function(time){
    console.log(`set timer for ${time} minutes `)
}
 stopwatch.timer()

stopwatch.dark = function(click){
    console.log(`your turned ${click} the light`)
}
 stopwatch.dark(stopwatch.light)

stopwatch.date = function(day){
    console.log(`Today is the ${day} `)
}
 stopwatch.date(stopwatch.currentDate)

