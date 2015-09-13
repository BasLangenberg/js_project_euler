/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

var x = 0;

for (var i = 0; i < 1000; i++) {
  if(i % 5 === 0){
    x += i;
  } else if(i % 3 === 0){
    x += i;
  }
}

document.getElementById("euler1").innerHTML = x;
