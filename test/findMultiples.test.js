const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected
test('multiples of 2 up to the limit of 6 should be [2, 4, 6]', () => {
    expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
});

test('multiples of 3 up to the limit of 12 should be [3, 6, 9, 12]', () => {
    expect(findMultiples(3, 12)).toEqual([3, 6, 9, 12]);
});

test('multiples of 5 up to the limit of 29 should be [5, 10, 15, 20, 25]', () => {
    expect(findMultiples(5, 29)).toEqual([5, 10, 15, 20, 25]);
});

test('multiples of 7 up to the limit of 7 should be [7]', () => {
    expect(findMultiples(7, 7)).toEqual([7]);
});

test('multiples of 13 up to the limit of 50 should be [13, 26, 39]', () => {
    expect(findMultiples(13, 50)).toEqual([13, 26, 39]);
});

test('multiples of 20 up to the limit of 123 should be [20, 40, 60, 80, 100, 120]', () => {
    expect(findMultiples(20, 123)).toEqual([20, 40, 60, 80, 100, 120]);
});

test('multiples of 32 up to the limit of 64 should be [32, 64]', () => {
    expect(findMultiples(32, 64)).toEqual([32, 64]);
});