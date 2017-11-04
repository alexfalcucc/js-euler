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

/**
 * OPTMIZED SOLUTION
 *
 *
 * LCM
 * ======
 * Least Common Divisor (LCM) of numbers A and B,
 * is a number which is the least number divisible by both A & B.
 * Moreover LCM (A, B, C) = LCM (LCM (A, B), C) and so on.
 *
 * > Relation between LCM and GCD
 *
 * LCM(A,B) = (A * B)/GCD(A*B)
 *
 * GCD(A, B) = GCD (B, A mod B)
 *
 */

function GCD(A, B) {
  while (B != 0) {
    A, B = B, A % B;
    console.log(A % B);
  }
  return A;
}

function LCM(B) {
  var range_ = utils.range(1, B);
  for (var A in range_) {
    B = (range_[A]*B)/GCD(range_[A], B);
  }
  return B;
}


/**
 * NOT OPTMIZED SOUTION
 *
 */

function leastDivisor(limit) {
  var i = 1,
    n_range = utils.range(1, limit),
    divisible = 1,
    divisibles = [];

  while (true) {
    for (var n in n_range) {
      if (i % n_range[n] != 0) {
        divisibles = [];
        continue;
      } else {divisibles.push(true)}
    }

    if (divisibles.length == limit) {
      divisible = i;
      break;
    }
    i+=1;
  }
  return divisible;
}

utils.show_answer('05', LCM(20));
