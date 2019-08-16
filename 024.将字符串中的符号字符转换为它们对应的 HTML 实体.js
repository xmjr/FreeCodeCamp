/**
 * 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）
 * 转换为它们对应的 HTML 实体
 */

// 方法一：借用数组的map()方法
function convert(str) {
	var htmlEntities = {
		'&':'&amp;',
	    '<':'&lt;',
	    '>':'&gt;',
	    '\"':'&quot;',
	    '\'':'&apos;',
	};

	return str.split("").map(function(entity) {
		return htmlEntities[entity] || entity;
	}).join("");

	/* 另一种写法：
	return Array.prototype.map.call(str, function(entity) {
		return htmlEntities[entity] || entity;
	}).join("");
	 */
}

convert("我是<>谁&");  // "我是&lt;&gt;谁&amp;"


// 方法二：字符串replace()方法
function convert(str) {
  str = str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
           .replace(/"/g,"&quot;").replace(/'/g,"&apos;");
  return str;
}

convert("我是<>谁&");  // "我是&lt;&gt;谁&amp;"

