/**
 *
 * Reusables functions cuz we are lazy to repeat ourselfs.
 *
 */

"use strict";

var exec = require('child_process').exec;

/**
 * similar with python's range function to generate lists
 */
var range = function range_(start, end, step, offset) {
  var len = (Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1;
  var direction = start < end ? 1 : -1;
  var startingPoint = start - (direction * (offset || 0));
  var stepSize = direction * (step || 1);

  return Array(len).fill(0).map(function(_, index) {
    return startingPoint + (stepSize * index);
  });

}

/**
 * function to show the answer of the problem and made things easier to check
 */
var show_answer = function check_answer_(problem, yours) {
  var command = 'yes Y | euler -c '+problem;
  var callback = exec(command,
    function (error, stdout, stderr) {
      var euler_result = stdout.split(' ');
      console.log("Euler Result: "+euler_result[euler_result.length-1]+"yours: "+yours);
    });
  return "\n\n--------- EULER RESULT --------";
}

/**
 * useful to use with reduce
 */
var add = function add(a, b) {
  return a + b;
}

module.exports = {
  range,
  show_answer,
  add,
};
