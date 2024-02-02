var customer = {
    name:"vamshi",  //string
    age:24, //number
    isMarried:false, //boolean
    getCustomerDetails: function(){ },  //function
    address: {  //object
      city:'warangal',
      state:'Telangana',
      postalCode:506002
    },
    mobileNos:[9640284856, 1234567890] //Array
  }
  
  console.log(customer)
  console.log(customer.name)   //Dot notation
  console.log(customer['name'])  //Bracket notation
  