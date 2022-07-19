// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the ale passed to the function is located. If the value is not found, return -1

function search(arr, value) {
	// define initial min and max index
	let minIndex = 0;
	let maxIndex = arr.length - 1;

	// find mid number and compare with value
	while (minIndex <= maxIndex) {
		// find mid index
		let midIndex = Math.floor((minIndex + maxIndex) / 2);

		// define current number for comparison
		let currentNum = arr[midIndex];

		// if mid number is greater than value ignore right side of the array
		// if mid number is lower than the value ignore left side of the array
		// if found - return midIndex which will return index of value found in the array
		if (currentNum > value) {
			maxIndex = midIndex - 1;
		} else if (currentNum < value) {
			minIndex = midIndex + 1;
		} else {
			return midIndex;
		}
	}

	// if the value not found in the array return -1
	return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
