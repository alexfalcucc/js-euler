"use strict";

/**
 *
 * Reusables functions cuz we are lazy to repeat ourselfs.
 *
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

module.exports = {
  range,
};
