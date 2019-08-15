/**
 * 找到每个数组的子数组项中的最大值，然后串联成一个新的数组
 */

// 考虑了当数组项不是数组的情况，但没考虑子数组的子项仍然是数组的情况
function maxArray(arr) {
    let newArr = [];
    for (let e of arr) {
        if (Array.isArray(e)) {
            newArr.push(Math.max.apply(null, e));
            } else {
                newArr.push(e);
            }
    }
    return newArr;
}

maxArray([[2,3],[4,5,6],4]);  // [3, 6, 4]

maxArray([[2,3],[4,5,6],4,[[1,3],[2,4]]]);  // [3, 6, 4, NaN]