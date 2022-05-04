// my code 

class Animal {
    constructor(name){
        // this._ represents a private property - don't touch it
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} has some sound`)
    }
}

class Dog extends Animal {
    constructor(name,breed){
        super(name)
        this._breed =breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        // original method from Animal class
        super.speak()
        // creates a new display because we are inside of a class 
        console.log(`${this.name} growls`)
    }
}



// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }    
// }
// class Cat extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }    
// }

// let simba = new Dog('Simba','Shepard')
// let machi = new Dog('The Machine','Pitbull')
// let salem = new Cat('Salem', 'American Shorthair')

// let farm = [simba,machi,salem]

// for( a of farm ){
//     a.speak()
// }