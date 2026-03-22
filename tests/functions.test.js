const { add, isEven, maxInArray, reverseString } = require("../src/functions");

test("add() adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
});

test("isEven() correctly identifies even numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toBe(false);
});

test("maxInArray() returns the largest number", () => {
    expect(maxInArray([1, 5, 3])).toBe(5);
    expect(maxInArray([-10, -3, -20])).toBe(-3);
});

test("maxInArray() returns null for empty array", () => {
    expect(maxInArray([])).toBeNull();
});

test("reverseString() reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("abc")).toBe("cba");
});
