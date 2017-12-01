// Assignment of different types
let dynamic = 'A string';

dynamic = 52;

// Operations with different types
const days = '7';
const hours = 24;

// 168 (luckily, the hours string is coerced)
const week = days * hours;

// 77 (concatenate 7 and 7)
const fortnight = days + days;

// Calling functions
function getVolume(width, height, depth) {
	return width * height * depth;
}

// NaN (10 * undefined * undefined)
const volumeA = getVolume(10);

// 32 (the 8 is ignored)
const volumeB = getVolume(2, 4, 4, 8);
