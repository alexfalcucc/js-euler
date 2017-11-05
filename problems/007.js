/**
 *
 * Project Euler Problem 7
 * =======================
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
 * we can see that the 6th prime is 13.
 *
 * What is the 10001st prime number?
 *
 */
var utils = require('../utils/reusables.js');

function foo() {
  var primes = [];
  var i = 1;
  while (primes.length <= 10001) {
    if (utils.is_prime(i)) {
      primes.push(i);
    }
    i+=1;
  }
  return primes[primes.length-1];
}

utils.show_answer('07', foo());
