// [1,8,6,2,5,4,8,3,7] = 49

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var len = height.length
  var maxArea = 0
  for (var i = 0; i < len - 1; i++) {
    for (var j = 1; j < len; j++) {
      var area = (j - i) * (height[i] < height[j] ? height[i] : height[j])
      if (area > maxArea) {
        maxArea = area
      }
    }
  }
  return maxArea
};

maxArea([1,8,6,2,5,4,8,3,7])