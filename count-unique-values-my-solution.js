// Implement a function called countUniqueValues, which accepts a sorted array and couns the uniques values in the arrat. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
	let referenceValue = null;
	let uniqueValues = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (referenceValue !== arr[i]) {
			uniqueValues += 1;
			referenceValue = arr[i];
		}

		if (referenceValue === arr[i]) {
			continue;
		}
	}
	return uniqueValues;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(
	countUniqueValues([1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 5, 7, 7, 8, 8, 8, 8, 12])
); // 7
console.log(countUniqueValues([-3, -2, -1, -1, -1, 0, 1, 1, 2, 3, 3, 4, 4, 4])); // 8
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([0])); // 1
