/**
 * 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
 * 例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，第二个参数是 { last: "Capulet" }，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。
 */


// 方法一：数组的filter()、every()方法
function where(collection, source) {
  
  // keys是source的键名
  var keys = Object.keys(source);
  
  // obj是数组collection中的子项，返回true的项
  return collection.filter(function(obj) {
    // item是source键名的子项，每项键值对都相等才返回
    return keys.every(function(item) {
      // 返回：数组collection的子项中与source键名的子项相等的属性，并且值也相等
      return obj.hasOwnProperty(item) && obj[item] === source[item];
    });
  });  
}

where( [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],  { last: "Capulet" });

// {first: "Tybalt", last: "Capulet"}



// 方法二：用for双层遍历
function where(collection, source) {
    var arr = [];
    // keys是参数source键名的集合
    var keys = Object.keys(source);
    
    for (var i = 0; i < collection.length; i++) {
        for (var j = 0; j < keys.length; j++) {
            // 如果：数组（collection）子项中有与source相同的键名，且健值也一样，则...
            if(collection[i][keys[j]] === source[keys[j]]) {
                arr.push(collection[i]);
            }
        }
    }
    return arr;
}

where( [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],  { last: "Capulet" });

// {first: "Tybalt", last: "Capulet"}