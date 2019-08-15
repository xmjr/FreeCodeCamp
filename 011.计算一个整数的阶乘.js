/**
 * 计算一个整数的阶乘
 */

function factorialize(num) {
  // 不限定num的话，会无限递归下去，-1 -2 ....
  if(num > 0) {  
    return num * (factorialize(num - 1)); 
  } else {
    return 1;  // 当num=1时的情况；若无这句，值都为null
  }
}

factorialize(3);  // 6