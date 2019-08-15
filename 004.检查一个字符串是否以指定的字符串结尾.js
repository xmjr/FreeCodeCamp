/**
 * 检查一个字符串（str）是否以指定的字符串（target）结尾
 */

// slice()写法
function endWith(str, target) {
    var i = str.length;
    var j = target.length;
    return str.slice(j-i+1)  === target;
}

endWith("woshishui","shui");


// substring()写法
function endWith(str, target) {
  var j = target.length;
  var i = str.length;
  return str.substring(i-j,i) === target;
}

endWith("Bastian", "n");


// ES6写法
function endWith(str, target) {
    return str.endsWith(target);
}

endWith("woshishui","shui");