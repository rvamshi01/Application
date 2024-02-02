var heroines = [
    {name:'keerthi', voice:'keerthi' , age:27},
    {name:'Anupama', voice:'anupama', age: 24},
    {name:'rashmika', voice:'rashmika', age:26}
]

var len = heroines.length;
for(var i=0; i<len; i++){
for(var prop in heroines[i]){
    console.log(prop+"-"+heroines[i][prop])
}
}