function getNumber(num){ //declaration of a function where as getNumber is our function name and within the round braces we passed argument//
  
var result=document.getElementById("result");

result.value +=num; //This is used for get number, and we used plus sign for concatination

}
function clearResult(){
    var result = document.getElementById("result"); //This is used for get element via 'id'
    result.value = "0" //This empty string which is used to clear input field//
}

function getResult(){
    var result = document.getElementById("result"); 
    result.value=eval(result.value)
}