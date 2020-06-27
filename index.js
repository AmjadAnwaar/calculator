
/*========================================
Project Name: PureCalc
Version: 1.0
Author: Kalpesh Singh
Inspired From: dribbble.com/oneMoreArray =======================================*/

function getNumber(num){
    var result = document.getElementById("result1");
    
  
    result1.value +=  num; 
  }
  function clearResult(){
    var result = document.getElementById("result1");
  
    result1.value =  ""; 
  }
  function getResult(){
    var result = document.getElementById("result1");
  
    result1.value =  eval(result1.value); 
  }