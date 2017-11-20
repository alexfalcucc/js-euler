/**
 *
 * Project Euler Problem 9
 * =======================
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for
 * which,
 *                              a^2 + b^2 = c^2
 *
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 */
var utils = require('../utils/reusables.js');

/**
 * we could do a research and we find a formula:
 * https://en.wikipedia.org/wiki/Pythagorean_triple#Proof_of_Euclid.27s_formula
 *
 * @param {a} this is the 1st unknown variable
 * @param {b} this is the 2nd unknown variable
 * @param {c} this is the 3rd unknown variable
 *
 * @return {sum} sum of all variables
 *
 */
function foo() {
  return true;
}


utils.show_answer('09', foo());
