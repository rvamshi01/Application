//Object constructor
function customer(id,name,salary){
    this.id = id
    this.name= name
    this.salary= salary
 }
 var firstCustomer = new customer(368, "vamshi", 20000)
 var secondCustomer = new customer(1, "vicky", 30000)
 
 console.log(firstCustomer.id, firstCustomer.name, firstCustomer.salary)
 console.log(secondCustomer.id, secondCustomer.name, secondCustomer.salary)