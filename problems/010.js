/**
 *
 *
 * Project Euler Problem 10
 * ========================
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 *
 */

var utils = require('../utils/reusables.js');

function foo(n) {
  var primes = [];
  var i = 1;
  while (primes.length <= 10001) {
    if (utils.is_prime(i)) {
      primes.push(i);
    }
    i+=1;
  }
  return true;
}

utils.show_answer('10', foo());
