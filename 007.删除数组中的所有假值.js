/**
 * 删除数组中的所有假值
 * 在JavaScript中，假值有7个：false、null、0、-0、""、undefined 和 NaN。
 */

// 方法一：用数组的filter()方法
function bouncer(arr) {
  function change(ev) {
    return !(ev === null || ev === false || ev === undefined || ev === 0 || ev === "" || ev !== ev);
  }
  return arr.filter(change);
}

bouncer([1,2,3,0,false,NaN,-0,"",null, undefined]); // [1, 2, 3]


// 方法二：用for..in循环和splice()方法
function removeFalse(arr) {
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        if (e === null || e === false || e === undefined || e === 0 || e === "" || e !== e) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

removeFalse([1,2,3,0,false,NaN,-0,"",null, undefined]); // [1, 2, 3]