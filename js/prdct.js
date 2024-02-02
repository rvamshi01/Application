var data;

function fetchData(cb){

  setTimeout(function(){

    data = {productId:101, productName:"samsung tv"}

    cb()

  },5000)

}

 

function displayData(){

  console.log(data)

  console.log("after data fetching...")

}

fetchData(displayData)