//======Strings Programs ====================
var str1 =   "imarticus lerning"
var str2 = new String("imarticus")
console.log(typeof(str1))//string
console.log(typeof(str2)) //object

console.log(str1 == str2)  //true
console.log(str1 === str2) //false

console.log(str1.charAt(4))
console.log(str1.indexOf('l'))
console.log(str1.slice(0,6))//mart