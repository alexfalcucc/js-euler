"use strict";

/**
 *
 * Reusables functions cuz we are lazy to repeat ourselfs.
 *
 */

var exec = require('child_process').exec;

var range = function range_(start, end, step, offset) {
  var len = (Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1;
  var direction = start < end ? 1 : -1;
  var startingPoint = start - (direction * (offset || 0));
  var stepSize = direction * (step || 1);

  return Array(len).fill(0).map(function(_, index) {
    return startingPoint + (stepSize * index);
  });

}


var check_answer = function check_answer_(problem) {
  var command = 'yes Y | euler -c '+problem;
  var callback = exec(command,
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
    });
  return;
}

module.exports = {
  range,
  check_answer,
};
