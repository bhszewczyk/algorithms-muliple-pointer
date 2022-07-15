// Write a function called maxSubarraySum which accepts an array of integrars and a number called n. The function should calculate the maximum sum od n consecutive elements in the array.

function maxSubarraySum(arr, n) {
	// if not enough numbers in the array return null
	if (arr.length < n) {
		return null;
	}

	// define temporary sum and maximum as Infinity to be able to sum negative nums
	let tempSum = 0;
	let maxSum = -Infinity;

	// create initial tempSum
	for (let i = 0; i < n; i++) {
		tempSum += arr[i];
	}

	// go through the array - add next number and subtract previous number
	for (let i = n; i < arr.length; i++) {
		// console.log(`tempSum: ${tempSum}, maxSum: ${maxSum}`);

		// compare sums and keep higher one
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
		tempSum = tempSum - arr[i - n] + arr[i];
	}
	return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null
