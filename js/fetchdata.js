var data;
function fetchData(){
    setTimeout(function(){  
        data="vamshi" 
        displayData ()
    },2000)
}
function displayData(){
    console.log(data);
    // console.log("after data fetching...");
}
fetchData(displayData)

