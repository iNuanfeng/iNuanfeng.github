// [1,8,6,2,5,4,8,3,7] = 49

/*
1. 一次循环
2. 取两边循环 - 比自己高的，得到max
3. 两边循环时，判断一次最小距离，满足不了则放弃
*/

/**
 * @param {number[]} height
 * @return {number}
 */

function computeArea(curHeight, from, to) {
  var area = curHeight * (from - to)
  return Math.abs(area)
}

function shouldSpace(maxArea, curHeight) {
  var space = maxArea / curHeight
  return Math.ceil(space)
}

var maxArea = function(height) {
  var len = height.length
  var maxArea = 0
  var i, start, end, area

  for (i = 0; i < len; i++) {
    for (start = 0; start < i; start++) {
      if (i - start < shouldSpace(maxArea, height[i])) {
        break;
      }
      if (height[start] >= height[i]) {
        area = computeArea(height[i], start, i)
        maxArea = area > maxArea ? area : maxArea
        break;
      }
    }

    for (end = len - 1; end > i; end--) {
      if (end - i < shouldSpace(maxArea, height[i])) {
        break;
      }
      if (height[end] >= height[i]) {
        area = computeArea(height[i], i, end)
        maxArea = area > maxArea ? area : maxArea
        break;
      }
    }
  }

  return maxArea
};

maxArea([1,8,6,2,5,4,8,3,7])











