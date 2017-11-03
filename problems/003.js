/**
 *
 * Project Euler Problem 3
 * =======================
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143?
 *
 * link to reference: https://www.mathsisfun.com/prime-factorization.html
 *
 */

var utils = require('../utils/reusables.js');


function is_prime(n) {
  if (n == 2) {
    return true
  }
  if (n == 3) {
    return true
  }
  if (n % 2 == 0) {
    return false
  }
  if (n % 3 == 0) {
    return false
  }

  var i = 5;
  var w = 2;

  while (i * i <= n) {
    if (n % i == 0) {
      return false
    }

    i += w
    w = 6 - w

  }

  return true
}


function factors(n) {
  return n;
}

utils.show_answer('03', factors(600851475143));
