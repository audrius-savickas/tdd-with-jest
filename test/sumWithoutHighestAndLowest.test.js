const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');

test('sum of [6, 2, 1, 8, 10] should be 16', () => {
    expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
});

test('sum of [1, 1, 11, 2, 3] should be 5', () => {
    expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
});

test('sum of [] should be 0', () => {
    expect(sumWithoutHighestAndLowest([])).toEqual(0);
});

test('sum of [1, 1, 1, 99, 99, 99] should be 0', () => {
    expect(sumWithoutHighestAndLowest([1, 1, 1, 99, 99, 99])).toEqual(0);
});

test('sum of [1, 2, 3] should be 2', () => {
    expect(sumWithoutHighestAndLowest([1, 2, 3])).toEqual(2);
});

test('sum of [15, 325, 22, 66, 1, 5, 9, 325, 22, 1, 1] should be 139', () => {
    expect(sumWithoutHighestAndLowest([15, 325, 22, 66, 1, 5, 9, 325, 22, 1, 1])).toEqual(139);
});
