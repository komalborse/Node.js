function callFunction(fun){
 fun();
}

//function sayHi(){

//sayHi();
//function expression
var sayBye = function(){
  console.log('bye');
};
callFunction(sayBye);
