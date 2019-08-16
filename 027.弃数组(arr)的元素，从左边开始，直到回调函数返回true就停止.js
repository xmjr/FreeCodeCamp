/**
 * 弃数组(arr)的元素，从左边开始，直到回调函数return true就停止
 * 第二个参数，func，是一个函数,用来测试数组的第一个元素:
 * 如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变);
 * 继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。
 * 最后返回数组的剩余部分，如果没有剩余，就返回一个空数组
 * 如：drop([1, 2, 3, 4], function(n) {return n >= 3;}) 应该返回 [3, 4]
 * drop([1, 2, 3, 9, 2], function(n) {return n > 2;})应该返回 [3, 9, 2]
 */


function drop(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		// 如果将if换成while，放在chrome控制台中运行的话，电脑会死机，呃
		if(!func(arr[i])) {
			arr.shift();
		}
	}
	return arr;
}

drop([1, 2, 3, 9, 2], function(n) {return n > 2;});   // [3, 9, 2]

