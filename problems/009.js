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
 * basically the rule is a = m² - n², b = mn, c = m² + n²
 *
 * @return {sum} sum of all variables
 *
 * just found a brute force on this post: http://www.mathblog.dk/pythagorean-triplets/
 * that could help me to find the answer.
 *
 * as it says: "For the brute force algorithm we would need to loop over all the
 * possible values of a and b, calculate c and check if that is a solution.
 * We could be ignorant and just let a and b loop from 1-1000, or we could use
 * the facts that a < b < c, and thus exploit that  a < s/3,  and a < b < s/2."
 *
 */
function calc_pythagorean(a, b, c) {
  a = ((a * 2) - (b * 2))*2;
  b = (2 * (a * b))*2;
  limit = parseInt(Math.sqrt(1000/2));
  return limi
  t;
}


let a = 3,
    b = 4,
    c = 5;

utils.show_answer('09', calc_pythagorean(a, b, c));
