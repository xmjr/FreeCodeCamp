/**
 * 比较两个数组，差异项组成一个新数组
 */


// 方法一：用数组的filter()方法
function diff(arr1, arr2) {
	var newArr = [];
	var newArr1 = [];
	var newArr2 = [];

	 newArr1 = arr1.filter(function(val) {
		return arr2.indexOf(val) < 0;
	})

	 newArr2 = arr2.filter(function(val) {
	 	return arr1.indexOf(val) < 0;
	 })

	 return newArr.concat(newArr1,newArr2);
}

diff([1,2,3],[2,4,6]);  // [1, 3, 4, 6]


// 方法二：用for循环
function diff(arr1,arr2) {
  var newArr = [];
  // 过滤数组1中与数组2相等的项
  for(var i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i] < 0)) {
      newArr.push(arr1[i]);
    }
  }
  // 过滤数组2中与数组1相等的项
  for(var j = 0; j < arr2.length; j++) {
    if(arr1.indexOf(arr2[j] < 0)) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);  // [4]