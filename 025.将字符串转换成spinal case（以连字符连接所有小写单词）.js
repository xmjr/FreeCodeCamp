/**
 * 将字符串转换成spinal case（以连字符连接所有小写单词）
 * 需要转换的字符格式包括两类：
 * 一是利用空格、下划线等符号分解命名，二是驼峰命名法;
 * spinalCase("This Is Spinal Tap") 应该返回 "this-is-spinal-tap"
 * spinalCase("thisIsSpinalTap") 应该返回 "this-is-spinal-tap"
 * spinalCase("The_Andy_Griffith_Show") 应该返回 "the-andy-griffith-show"
 * spinalCase("Teletubbies say Eh-oh") 应该返回 "teletubbies-say-eh-oh"
 * 【思路】：
 * 将字符串的按照符号类型分解，
 * 如果分解后的数组长度为1，说明他是驼峰类型的字符串 
 */


function spinalCase(str) {
	if(str.split(/\W|_/).length == 1) {
		for (var i = 0; i < str.length; i++) {
			if (/[A-Z]/.test(str[i])) {
				str = str.replace(str[i], "-" + str[i].toLowerCase());
			}
		}
	} else {
		str = str.toLowerCase().split(/\W|_/).join("-");
	}

	return str;
}

spinalCase("This Is Spinal Tap");  // "this-is-spinal-tap"
spinalCase("thisIsSpinalTap");  // "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show");  // "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh");   // "teletubbies-say-eh-oh"