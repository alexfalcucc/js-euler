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
  for (var i = 2, len = 2000000; i < len; i++) {
    if (utils.is_prime(i)) {
      primes.push(i);
    }
  }
  return primes.reduce(utils.add);
}

utils.show_answer('10', foo());
