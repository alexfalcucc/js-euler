/**
 *
 * Project Euler Problem 4
 * =======================
 *
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 * 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 */
var utils = require('../utils/reusables.js');

function is_palindrome(n) {
  var reversed = (n+'').split('').reverse().join('')
  return reversed == n.toString() ? true : false
}

function get_largest_palindrome(dig) {
  var n = 100,
      palindrome = 1;

  while (n.toString().length == dig) {
    for (var i = 100, len=999; i < len; i++) {
      prod = n * i;
      if (is_palindrome(prod) && prod > palindrome) {
        palindrome = prod;
      }
    }
    n+=1;
  }

  return palindrome;
}

utils.show_answer('04', get_largest_palindrome(3));
