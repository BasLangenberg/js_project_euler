/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var x = 0;

function isPrime(num){
  for (var i = 2; i < num; i++) {
    if(num % i === 0){
      return false;
    }
    else {
      return true;
    }
  }
}

// Made smaller due to lack of compute power
var prime = 6008514;

for (var i = 2; i < prime; i++) {
    if(prime % i === 0 && isPrime(i)){
      x = i;
      console.log(x);
    }
}


document.getElementById('euler3').innerHTML = x;
