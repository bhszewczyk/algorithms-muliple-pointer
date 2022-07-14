// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values hat sum to zero or undefined if a pair does not exist

function sumZero(arr) {
	// define array length
	const arrLength = arr.length;

	// sum 2 outer numbers and check if they sum to 0 or not
	for (let i = 0; i < arrLength; i++) {
		let leftIndex = 0;
		let rightIndex = arr.length - 1;
		let num1 = arr[leftIndex];
		let num2 = arr[rightIndex];

		// if array 1 number left return
		if (arr.length <= 1) {
			return;
		}

		// if outer numbers sum to 0 return array with this numbers
		// if sum is positive it means that right number is too big - remove from array
		// if sum is negative it means that left number is to small - remove from array
		if (num1 + num2 === 0) {
			return [num1, num2];
		} else if (num1 + num2 > 0) {
			arr.splice(rightIndex, 1);
		} else if (num1 + num2 < 0) {
			arr.splice(leftIndex, 1);
		}
	}
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-4, -2, 2, 3, 5])); // [-2,2]
