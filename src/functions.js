// Implement the following functions.
// Do NOT change the function names.
// Export them at the bottom exactly as shown.

/**
 * Returns the sum of two numbers.
 */
function add(a, b) {
    // TODO: implement
    return a + b;
}

/**
 * Returns true if n is even, false otherwise.
 */
function isEven(n) {
    // TODO: implement
    return 0 == (n % 2);
}

/**
 * Returns the largest number in an array.
 * If the array is empty, return null.
 */
function maxInArray(arr) {
    // TODO: implement
}

/**
 * Returns a reversed copy of the input string.
 */
function reverseString(str) {
    // TODO: implement
    // turn into an array, array reverse, join back into a string
    return str.split('').reverse().join('');
}

module.exports = { add, isEven, maxInArray, reverseString };
