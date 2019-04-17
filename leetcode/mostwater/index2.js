// [1,8,6,2,5,4,8,3,7] = 49

/*
1. 一次循环
2. 取两边循环（判断一次max最小距离 - 选择放弃） - 比自己高的，得到max
*/

/**
 * @param {number[]} height
 * @return {number}
 */

function computeArea(curHeight, from, to) {
  var area = curHeight * (from - to)
  return(Math.abs(area))
}

var maxArea = function(height) {
  var len = height.length
  var maxArea = 0

  for (var i = 0; i < len; i++) {
    for (var start = 0; start < i; start++) {
      if (height[start] >= height[i]) {
        var area = computeArea(height[i], start, i)
        maxArea = area > maxArea ? area : maxArea
        break;
      }
    }

    for (var end = len - 1; end > i; end--) {
      if (height[end] >= height[i]) {
        var area = computeArea(height[i], i, end)
        maxArea = area > maxArea ? area : maxArea
        break;
      }
    }
  }
  return maxArea
};

maxArea([1,8,6,2,5,4,8,3,7])











