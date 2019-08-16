/**
 * 传入两个或两个以上的数组；
 * 返回一个以给定的原始数组排序的不包含重复值的新数组；
 */


// 方法一：用数组的reduce()、filter()方法
function unite(arr1, arr2, arr3){

	// args数组的子项也是数组
	var args = Array.from(arguments);

	// 将args子项拼接成一个新数组newArr
	var newArr = args.reduce(function(prev, cur) {
		return prev.concat(cur);
	});

	return newArr.filter(function(item, index) {
		return newArr.indexOf(item) === index;
	})
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1], [7,9]); //[1, 3, 2, 5, 4, 7, 9]


// 方法二：利用Set()数据类型，也是ES6写法
function unite(arr1, arr2, arr3) {
	let args = Array.from(arguments);
	let newArr = args.reduce(function(prev, cur) {
		return prev.concat(cur);
	});

	let set = new Set(newArr);

	return Array.from(set);
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1], [7,9]);  // [1, 3, 2, 5, 4, 7, 9]