//========2-D Array NESTED ARRAYS=================
var twoDArray=[[1,4,5], [6,8,9] ,[9,10,3]]
var row= twoDArray.length;

for(var i=0;i<row;i++){
   console.log(twoDArray[i])
    var items= twoDArray[i].length;
    for(var j=0;j<items;j++){
        console.log(i,j,twoDArray[i][j])
                            
    }
}
      