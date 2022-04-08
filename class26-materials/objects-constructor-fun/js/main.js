//Create a constructor with 4 properties and 3 methods

function MakeBusiness(sales, employees, location, expenses){
    this.sales = sales
    this.employees = employees
    this.location = location
    this.expenses = expenses

    this.profit = function(){
        alert (`what is the ${this.sales} price`)
    }
    this.overhead = function(){
        alert(`How much do your ${this.employees} earn`)
    }
}