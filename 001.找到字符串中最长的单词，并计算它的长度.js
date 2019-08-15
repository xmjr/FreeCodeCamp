/**
 * 找到字符串中最长的单词，并计算它的长度；
 * 考虑标点符号、单词长度相等、重复出现的情况；
 * 4种不同方法，并标明ES6写法；
 */

// 方法一：for...in 或 for..of循环
function findLongestWord(str) {
    var arr = str.split(/\W+/g),
   		max = arr[0],
    	k,
    	temp = [];
    
    // 首先，先找到长度最长的第一个单词
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].length > max.length) {
        	max = arr[i];
        }
    }
    
    k = arr.indexOf(max);
    // 看是否有与该单词长度一样的单词，若有则加到新数组中
    for (var j = k; j < arr.length; j++) {
        if(arr[j].length === max.length) {
            temp.push(arr[j]);
        }
    }
    
    return "最长的单词是：" + temp + "；单词长度为：" + max.length;
}

findLongestWord("wo shi,shui word  i");
// "最长的单词是：shui,word；单词长度为：4"



// 方法一（ES6写法）：let代替var，for..of代替for...in
function findLongestWord(str) {
	let arr = str.split(" "),
		max = arr[0],
		temp = [],
		k;

	for (let i of arr) {
		if (i.length > max.length) {
			max = i;
		}
	}
	k = arr.indexOf(max);

	for (let e of arr) {
		if (e.length === max.length) {
			temp.push(e);
		}
	}

	return "最长的单词是：" + temp + "；单词长度为：" + max.length;
}
findLongestWord("wo shi shui word  i");



// 方法二：借用Math.max()方法
function findLongestWord(str) {
	var arr = str.split(/\W+/g),
		arrNum = [];


	for (var i = 0; i < arr.length; i++) {
			arrNum.push(arr[i].length);
	}
	return Math.max.apply(null, arrNum);
}

findLongestWord("wo shi,shui word  i");  // 4



// 方法二（ES6写法）
function findLongestWord(str) {
	let arr = str.split(/\W+/g),
		arrNum = [];

	for (let e of arr) {
			arrNum.push(e.length);
	}
	return Math.max.apply(null, arrNum);
}

findLongestWord("wo shi,shui word  i");   // 4



// 方法三：用sort()排序
function findLongestWord(str) {
    var arr1 = str.split(/\W+/g);
    var arr2 = arr1.sort(function(a,b) {
		return b.length - a.length;
    })
    
    return arr2[0].length;
}

findLongestWord("wo shi,shui word  i");   // 4



// 方法四：数组的map()迭代方法和归并方法reduce()
function findLongestWord(str) {
    var arr = str.split(/\W+/g);
    return arr.map(function(val) {
        return val.length;
    }).reduce(function(a,b) {
        return Math.max(a,b);
    })
}

findLongestWord("wo shi,shui word  i");   // 4