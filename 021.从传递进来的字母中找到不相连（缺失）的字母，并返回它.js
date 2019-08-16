/**
 * 从传递进来的字母中找到不相连（缺失）的字母，并返回它;
 * 如果所有字母都在序列中，返回 undefined;
 * 这里假设所有字母已经排好序（否则要先排序）;
 * 别忘了考虑两个字母间缺失的字母不止一个;
 */


function separate(str) {
	var arr = [];
	var newArr = [];

	// 将每个字母转换成对应的编码，并push到数组newArr中
	for (var i = 0; i < str.length; i++) {
		arr.push(str.charCodeAt(i));
	}

	// 遍历newArr数组
	for (var i = 0; i < arr.length; i++) {
		// 如果相邻两个项之间的差大于1，说明字母不相连
		if (arr[i+1] - arr[i] > 1) {
			// 假设相邻两个项之间缺失了num个字母
			var num = arr[i+1] - arr[i];
			for (var j = 1; j < num; j++) {
				newArr.push(arr[i] + j);
			}
		}
	}

	// 如果所有字母都在序列中，也就是newArr数组为空，则返回 undefined
	if (newArr.length === 0) {
		return undefined;
	} else {
		for (var i = 0; i < newArr.length; i++) {
			newArr[i] = String.fromCharCode(newArr[i]);
		}
		return newArr.join(" ");
	}
}

separate("abcfh");   // "d e g"
 

