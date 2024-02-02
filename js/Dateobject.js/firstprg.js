//=======Date Object=================
var date = new Date()
console.log(date)
document.getElementById('displayDate').innerHTML = date
console.log(date.toDateString())
console.log(date.getDate())
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)