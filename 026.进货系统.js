/**
 * 进货系统
 * 依照一个存着新进货物的二维数组(arr2),
 * 更新存着现有库存(在 arr1 中)的二维数组。
 * 如果货物已存在则更新数量；
 * 如果没有对应货物则把其加入到数组中，更新最新的数量。
 * 返回当前的库存数组，且按货物名称的字母顺序排列。
 */

function update(arr1, arr2) {
	if (arr1.length === 0) {
		arr1 = arr2;
	} else {
		arr1.forEach(function(item, index) {
			for (var i = 0; i < arr2.length; i++) {
				// 是同样的货物
				if (item[1] == arr2[i][1]) {
					item[0] += arr2[i][0];
					break;
				}
				// 不是相同的货物
				if (arr1.join().indexOf(arr2[i][1]) < 0) {
					arr1.push(arr2[i]);
				}
			}
		})
	}
	
	arr1.sort(function(a,b) {
		return a[1] > b[1];
	});

	return arr1;
}

