/**
 * 字符串的每个单词首字母都是大写，其余部分小写
 */

// 首先，确保所有字符是小写，然后将单词首字母变成大写
function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    let newArr = [];
    
    for (let e of arr) {
        newArr.push(e[0].toUpperCase() + e.slice(1));
    }
    
    return new Arr.join(" ");
}

titleCase("wo shi SHUI");   // "Wo Shi Shui"