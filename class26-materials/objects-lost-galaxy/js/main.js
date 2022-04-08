//Create a pizza object that has four properties and three methods

let pizza ={}


// properties
pizza.style = "wood fire"
pizza.toppings = ['margarita']
pizza.company = "only from Naples"

// methods

pizza.deliveryTime = function(){
    console.log("we don't do it")
}

pizza.cookTime = function(){
    console.log("depends on the hour")
}

// the dry side of an object 
// constructors 

function MakePizza(pizzaStyle, pizzaToppings,pizzaCompany){
    this.style = pizzaStyle
    this.toppings = pizzaToppings
    this.company = pizzaCompany
    this.deliveryTime = function(){
        alert('Too good to deliver')
    }
    this.cookTime = function(){
        alert(`It depends on the ${this.style}`)
    }
}