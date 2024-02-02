function  addOperation(){
    var firstNum = Number(document.getElementById('firstnumber').value)
    var secondNum= Number(document.getElementById('secondnumber').value)
    
     document.getElementById('result').innerHTML = firstNum + secondNum
}
function subOperation(){
    var firstNum= Number(document.getElementById('firstnumber').value)
    var secondNum= Number(document.getElementById('secondnumber').value)
    
    document.getElementById('result').innerHTML = firstNum - secondNum
}
function multiplyOperation(){
    var firstNum= Number(document.getElementById('firstnumber').value)
    var secondNum= Number(document.getElementById('secondnumber').value)
   
    document.getElementById('result').innerHTML = firstNum * secondNum
}
function divideOperation(){
    var firstNum= Number(document.getElementById('firstnumber').value)
    var secondNum= Number(document.getElementById('secondnumber').value)
    
    document.getElementById('result').innerHTML = firstNum / secondNum
}