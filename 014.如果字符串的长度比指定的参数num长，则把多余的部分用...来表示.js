/**
 * 如果字符串的长度比指定的参数num长，则把多余的部分用...来表示
 * 插入到字符串尾部的三个点号也会计入字符串的长度；
 * 但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
 */

function ellipsis(str, num) {
  if(num < str.length) {
    if(num <= 3) {
      return str.replace(str.slice(num,str.length),"...");
    } else {
      return str.replace(str.slice(num-3,str.length),"...");
    }
  } else {
    return str;
  }
  
}

ellipsis("A-tisket a-tasket A green and yellow basket", 11);
// A-tisket...