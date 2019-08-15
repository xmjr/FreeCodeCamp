/**
 * 先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引
 */


function where(arr, num) {
    arr.push(num);
    arr.sort(function(a,b) {
        return a - b;
    })
    
    return arr.indexOf(num);
}

where([1,2,3,4,5], 2.5);  // 2