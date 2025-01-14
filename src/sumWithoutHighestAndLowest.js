// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
	const lowest = Math.min(...array);
	const highest = Math.max(...array);
	return sum = array.reduce((accumulator, element) => {
		if (element === lowest || element === highest) {
			return accumulator;
		}
		return accumulator + element;
	}, 0);
};

module.exports = sumWithoutHighestAndLowest;
