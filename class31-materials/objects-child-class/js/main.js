//Create an a class and extend it - Can be anything you would like it to be! 

class Transportation {
    constructor(brand){
        this.brand = brand
    }
}

class Car extends Transportation{
    constructor(brand,mirrors){
    super(brand)
    this.mirrors = mirrors
    }
}

class Airplane extends Transportation {
    constructor(brand,pilots){
        super(brand)
        this.pilots = pilots
    }
}

let modelS = new Car ('Tesla', 2)
let a340 = new Airplane("AirBus", 2)