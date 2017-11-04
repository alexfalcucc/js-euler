/**
 *
 * Project Euler Problem 5
 * =======================
 *
 * 2520 is the smallest number that can be divided by each of the numbers
 * from 1 to 10 without any remainder.
 *
 * What is the smallest number that is evenly divisible by all of the numbers
 * from 1 to 20?
 *
 */
var utils = require('../utils/reusables.js');

function main(number) {
  var i = 1;
  var n_range = utils.range(1, 10);
  while (i <= number) {
    for (var n in n_range) {
      n_range[n];
    }
    i+=1;
  }
  return true;
}

utils.show_answer('05', main(100));
