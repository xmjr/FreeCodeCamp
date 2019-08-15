/**
 * 返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始
 */

function slasher(arr, n) {
  return arr.slice(n);
}

slasher([1, 2, 3], 2);  // [3]