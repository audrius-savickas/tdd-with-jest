const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected

test('first non-consecutive number of [1, 3] should be 3', () => {
    expect(firstNonConsecutiveNumber([1, 3])).toBe(3);
});

test('first non-consecutive number of [1, 2, 4, 5, 6] should be 4', () => {
    expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toBe(4);
});

test('first non-consecutive number of [-1, 0, 1, -10] should be -10', () => {
    expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toBe(-10);
});

test('first non-consecutive number of [1, 2, 3, 4, 5, 6] should be null', () => {
    expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toBe(null);
});