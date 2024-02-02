var data;
function fetchData(vn){
    setTimeout(function(){
        data={productId:12345, productName:"Motorola"}
        vn()
    },2000)

}
function displayData(){
        console.log(data)
        console.log("after fetching data.......");
}
fetchData(displayData)
// displayData()
