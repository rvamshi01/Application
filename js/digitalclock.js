//=========Digital Clock Implementation using Date and setInterval()===============
window.onload = function(){
    getTime()
}
function getTime(){
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    // console.log(h+":"+m+":"+s)
   
    h = chckePrependZero(h)
    m = chckePrependZero(m)
    s = chckePrependZero(s)

    document.getElementById('clockDisplayId').innerHTML = h+":"+m+":"+s
}
setInterval("getTime()", 1000)

var chckePrependZero = function(value){
    if(value<10)
        return "0"+value    
    else
        return value    
}
