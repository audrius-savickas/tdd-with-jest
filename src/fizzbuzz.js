/* FizzBuzz.

For a given natural number greater than zero return:
- 'fizz' if the number is dividable by 3
- 'buzz' if the number is dividable by 5
- 'fizzbuzz' if the number is dividable by 15
- the input number if no other requirement is fulfilled
*/

function fizzbuzz(number) {
    let output = "";
    if (number % 3 == 0) {
        output += "fizz";
    }
    if (number % 5 == 0) {
        output += "buzz";
    }
    if (output) return output;
    return number;
}

module.exports = fizzbuzz
