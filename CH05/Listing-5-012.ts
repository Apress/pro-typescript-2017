const numbers = [3, 11, 5, 7, 2];

// A fragile way of finding the maximum number
// const max = Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);

// A solid way to find the maximum
const max = Math.max.apply(null, numbers);

// 11
console.log(max);