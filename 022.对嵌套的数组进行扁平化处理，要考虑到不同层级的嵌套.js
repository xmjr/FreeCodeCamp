/**
 * 对嵌套的数组进行扁平化处理
 * 必须考虑到不同层级的嵌套
 */

// 递归函数
function flatArray(arr) {
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			newArr.push(arr[i]);
		} else {
			newArr = newArr.concat(flatArray(arr[i]));
		}
	}
	return newArr;
}

flatArray([1,[2,3],[[4,5],6,[[7,8],9],[10,11]]]);


// ES6写法：
var arr = [1,[2,3],[[4,5],6,[[7,8],9],[10,11]]];
arr.flat(Infinity);