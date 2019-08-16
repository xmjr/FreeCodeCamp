/**
 * 检查一个值是否是基本布尔值类型（true、false），并返回true或false
 */


// 方法一：
function boo(bool) {
	return typeof bool === "boolean";
}

// 方法二：
function boo(bool) {
	return Boolean(bool) === bool?true:false;
}