/**
 * 创建一个计算两个参数之和的 function。
 * 如果只有一个参数，则返回一个 function,
 * 该 function 请求一个参数然后返回求和的结果；
 * add(2, 3) 应该返回 5。
 * add(2)(3) 应该返回 5。
 */

// 只有1个或2个参数时
function add(a, b) {
	if (b === undefined) {
		return function(x) {
			return a + x;
		}
	} else {
		return a + b;
	}
}
add(2)(3);  // 5
add(2, 3);  // 5



// 不止两个参数的情况，有待完善
function add() {
	var sum = 0;

	if (arguments.length == 1) {
		sum = arguments[0];
		var temp = function(x) {
			sum = sum + x;
			return temp;
		}

		temp.toString = function() {
			return sum;
		}
		return temp;

	} else {
		for (var i = 0; i < arguments.length; i++) {
			 sum += arguments[i];
		}
		return sum;
	}
}
add(2)(3)(4);  // 9
add(2, 3, 4);  // 9
add(2)(3)(4) === add(2, 3, 4);  // false ，一个是函数，一个是数字
add(2)(3)(4) == add(2, 3, 4);  // true


