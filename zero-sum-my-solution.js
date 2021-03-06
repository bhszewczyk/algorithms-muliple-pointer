// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values hat sum to zero or undefined if a pair does not exist

function sumZero(arr) {
	// loop as long as the array has more than 1 number
	while (arr.length > 1) {
		let leftIndex = 0;
		let rightIndex = arr.length - 1;
		let num1 = arr[leftIndex];
		let num2 = arr[rightIndex];

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
