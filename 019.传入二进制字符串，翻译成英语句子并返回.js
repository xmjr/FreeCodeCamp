/**
 * 传入二进制字符串，翻译成英语句子并返回
 * 二进制字符串是以空格分隔的
 */

function binaryAgent(str) {
	var result = "";
	var arr = str.split(" ");

	for (var i = 0; i < arr.length; i++) {
		// 二进制转化为十进制
		var num = parseInt(arr[i], 2);
		str = String.fromCharCode(num);
		result += str;
	}
	return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// "Aren't bonfires fun!?"
