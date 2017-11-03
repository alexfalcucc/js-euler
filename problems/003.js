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
  return true
}

function prime(n) {
  return n;
}

utils.show_answer('03', prime(600851475143));
