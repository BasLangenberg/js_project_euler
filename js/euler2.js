/*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
var a = 0;
var b = 1;

var x = 0;

while(b<4000000){

  var j;

  console.log(b); // DEBUG CODE
  if(b % 2 === 0){
    x += b;
  }


  j = a + b;
  a = b;
  b = j;

}

document.getElementById("euler2").innerHTML = b;
