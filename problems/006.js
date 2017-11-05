/**
 *
 * Project Euler Problem 6
 * =======================
 *
 * The sum of the squares of the first ten natural numbers is,
 *                        1^2 + 2^2 + ... + 10^2 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *                     (1 + 2 + ... + 10)^2 = 55^2 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten
 * natural numbers and the square of the sum is 3025 - 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one
 * hundred natural numbers and the square of the sum.
 *
 */
var utils = require('../utils/reusables.js');

function foo(limit) {
  var range_ = utils.range(1, limit);
  var natuals = [];
  for (var i in range_) {
    range_[i];
    natuals.push(Math.pow(range_[i], 2));
  }
  natual_sum = natuals.reduce(utils.add, 0)
  return (
    Math.pow(range_.reduce(utils.add, 0), 2) - natual_sum
  );
}

utils.show_answer('06', foo(100));
