/**
 * 回文：如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)，这里不考虑汉字；
 * 注意需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文；
 * 如果给定的字符串是回文，返回true，反之，返回false。
 */

function palindrome(str) {
  //转换成小写用正则过滤掉符号
  var rstr = str.toLowerCase().replace(/[^a-z0-9]/g,"");
  //验证反转后是否相等
  return rstr.split("").reverse().join("") === rstr;
}

palindrome("abccBa");   // true