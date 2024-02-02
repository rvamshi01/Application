function sendAgeDetails(){
    var age= document.getElementById('age').value
    var result= (age<=21)?'you are too young ':'you are eligible'
    console.log(result)
    alert(result)
    document.getElementById('ageId').innerHTML = result
}
//(condition)? 'expression1':'expression2'