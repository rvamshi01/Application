var arr1= new Array(3)
arr1[0]="vamshi1"
arr1[1]="vicky1"
arr1[2]="srihan1"

var arr2=Array("vamshi2", "vicky2", "srihan2")

var arr3=["vamshi3", "vicky3", "srihan3"]

var arr4=[]
arr4[0]="vamshi4"
arr4[1]="vicky4"
arr4[2]="srihan4"

 var arr5=["vamshi5",23, false]//hetrogenious elements

 function allArrayDisplay(aray){
  
  for(var i=0;i<aray.length;i++){
    console.log(aray[i]);
  }

 }
 allArrayDisplay(arr1)
 allArrayDisplay(arr2)
 allArrayDisplay(arr3)
 allArrayDisplay(arr4) 
 allArrayDisplay(arr5)