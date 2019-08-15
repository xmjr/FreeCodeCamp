/**
 * 如果数组的第一个字符串元素包含了第二个字符串元素的所有字符（不区分大小写），则函数返回true
 */

// 方法一：for循环
function mutation(arr) {
  var newarr = [];
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  for(var i = 0; i < str2.length; i++) {
    newarr[i] = str1.indexOf(str2[i]);
  }
  return newarr.join("").indexOf("-1") == -1; 
  // -1意味着不存在
}
mutation(["hello", "hey"]);  // false


// 方法二：借用数组的every()方法
function include(arr) {
    var str1 = arr[0].toLowerCase();
  	var str2 = arr[1].toLowerCase();
    
    return Array.prototype.every.call(str2, function(ev) {
   		return str1.indexOf(ev) > -1;
    })
}

include(["woshishui", "Sui"]);   // true


// 方法三：借用数组的map()方法
function include(arr) {
    var str1 = arr[0].toLowerCase();
  	var str2 = arr[1].toLowerCase();
    var newArr = [];
    
    // map()返回的是一个数组，所以这里可以这样写
    newArr = Array.prototype.map.call(str2, function(ev) {
        return str1.indexOf(ev);
    })
    
    return newArr.indexOf(-1) === -1;
}

include(["woshishui", "Sui"]);   // true


// 方法四：借用数组的filter()方法
function include(arr) {
    var str1 = arr[0].toLowerCase();
  	var str2 = arr[1].toLowerCase();
    var newArr = [];
    
    // map()返回的是一个数组，所以这里可以这样写
    newArr = Array.prototype.map.call(str2, function(ev) {
        return str1.indexOf(ev) > -1;
    })
    
    return newArr.length > str2.length -1;
}

include(["woshishui", "Sui"]);   // true


// 方法五：借用数组的forEach()方法
function include(arr) {
    var str1 = arr[0].toLowerCase();
  	var str2 = arr[1].toLowerCase();
    var newArr = [];
    
    // map()返回的是一个数组，所以这里可以这样写
    Array.prototype.map.call(str2, function(ev) {
        return newArr.push(str1.indexOf(ev));
    })
    
    return newArr.indexOf(-1) === -1;
}

include(["woshishui", "Sui"]);   // true