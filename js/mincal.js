function addOperation(){
    var firstNo= Number(document.getElementById('firstnumber').value)
    var secondNo= Number(document.getElementById('secondnumber').value)
    document.getElementById('result').innerHTML = firstNo + secondNo
}
function subOperation(){
    var firstNo= Number(document.getElementById('firstnumber').value)
    var secondNo= Number(document.getElementById('secondnumber').value)

    document.getElementById('result').innerHTML = firstNo - secondNo
}
function multiplyOperation(){
    var firstNo= Number(document.getElementById('firstnumber').value)
    var secondNo= Number(document.getElementById('secondnumber').value)

    document.getElementById('result').innerHTML = firstNo * secondNo
}
function divideOperation(){
    var firstNo= Number(document.getElementById('firstnumber').value)
    var secondNo= Number(document.getElementById('secondnumber').value)

    document.getElementById('result').innerHTML = firstNo / secondNo
}