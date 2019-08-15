/**
 * 实现一个摧毁函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值；
 */

// 方法一：用数组的filter()方法
function destroyer(arr) {
  //Remove all the values
  var arrDel = [];
  for(var i = 1; i<arguments.length; i++) {
    arrDel.push(arguments[i]);
  }
  return arr.filter(function(val) {
    return arrDel.indexOf(val) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);  // [1,1]



// 方法二：ES6写法--Array.from、includes
function destoryer(arr) {
    let arrDel = (Array.from(arguments).slice(1));
    
    return arr.filter(function(val) {
        return arrDel.includes(val) === false;
    });
}

destoryer([1,2,3,4,5],1,2,5);  // [3, 4]


// 方法二：用for循环
function removeArr(arr) {
	var arrDel = [];
	
	for (var i = 1; i < arguments.length; i++) {
			arrDel.push(arguments[i]);	
	}
	
	for (var i = 0; i < arrDel.length; i++) {
		arr.splice(arr.indexOf(arrDel[i]), 1);
	}
	return arr;
}

removeArr([1,2,3,4,5],1,2,5);   // [3, 4]