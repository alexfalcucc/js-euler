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
 * prime solution based on python: https://stackoverflow.com/a/1801446/3659023
 *
 */

var utils = require('../utils/reusables.js');



function factors(n) {
  var i = 1;
  var largest_prime = 1;
  while (i <= n) {
    if (n % i == 0) {
      // when we divide the number with a divisor the
      // performance took a good time, amazing.
      n = n / i;
      // just check if it's a prime factor.
      if (utils.is_prime(i)) {
        largest_prime = i;
      }
    }
    i+=1;
  }
  return largest_prime;
}

utils.show_answer('03', factors(600851475143));
