/**
 * 把一个数组arr按照指定的数组大小size分割成若干个数组块
 */

function chunk(arr, size) {
  var newarr = [];
  for(var i = 0; i<arr.length; i += size) {
    newarr.push(arr.slice(i,i+size));
  }
  return newarr;
}
chunk(["a", "b", "c", "d"], 2);  //[["a","b"],["c","d"]]