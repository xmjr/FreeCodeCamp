/**
 * 传递给一个包含两个数字的数组，返回这两个数字和它们之间所有数字的和
 */

// 方法一：用for循环直接加总
function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var num = 0;
    
  for(var i = min;i<=max; i++) {
    num += i;
  }
  return num;
}

sumAll([5,2]);  // 14



// 方法二：数组的reduce()方法
function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
    
  for(var i = min + 1; i < max; i++) {
    arr.push(i);
  }
  return arr.reduce(function(a,b) {
    return a + b;
  });
}

sumAll([5,2]);  // 14


// 方法三：数学公式法
// 两个整数间所有数之和 = （（最小值+最大值）*（最大值-最小值 + 1））/2
function sumAll(arr) {
  return ((arr[0]+arr[1])*(Math.abs(arr[0]-arr[1])+1))/2;
}

sumAll([5,2]);  // 14