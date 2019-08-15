/**
 * 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
 */

function repeatString(str, num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
    	arr[i] = str;
    }
    return arr.join("");
}
repeatString("sde", 3);  
// "sdesdesde"，当num是0或负数时，为空字符串


// ES6写法
function repeatString(str, num) {
    return str.repeat(num);
}
repeatString("sde", 3);  
// "sdesdesde"，当num是0时显示空字符串；当num是负数时报错。