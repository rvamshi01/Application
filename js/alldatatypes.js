var student={
    name:"vamshi",//string
    age:23,//number
    isMarried:false,//boolean
    getCustomerDetails: function(){},//function
    address:{//object
        city:'warangal',
        state:'Telangana',
        postalCode:506002
    },
    mobileNos:[9640284856,9392881355]//array

}
console.log(student)
console.log(student.name, student.age, student.isMarried);
console.log(student['name','age', 'isMarried'])