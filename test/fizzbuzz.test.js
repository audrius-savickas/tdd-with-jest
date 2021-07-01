const fizzbuzz = require("../src/fizzbuzz");

test("1 should return number 1", function() {
  expect(fizzbuzz(1)).toEqual(1);
});

test("3 should return fizz", function() {
  expect(fizzbuzz(3)).toEqual("fizz");
});

test("4 should return number 4", function() {
  expect(fizzbuzz(4)).toEqual(4);
});

test("5 should return buzz", function() {
  expect(fizzbuzz(5)).toEqual("buzz");
});

test("9 should return fizz", function() {
  expect(fizzbuzz(9)).toEqual("fizz");
});

test("10 should return buzz", function() {
  expect(fizzbuzz(10)).toEqual("buzz");
});

test("15 should return fizzbuzz", function() {
  expect(fizzbuzz(15)).toEqual("fizzbuzz");
});

test("18 should return fizz", function() {
  expect(fizzbuzz(18)).toEqual("fizz");
});

test("30 should return fizzbuzz", function() {
  expect(fizzbuzz(30)).toEqual("fizzbuzz");
});

test("48 should return fizz", function() {
  expect(fizzbuzz(48)).toEqual("fizz");
});

test("50 should return buzz", function() {
  expect(fizzbuzz(50)).toEqual("buzz");
});

test("52 should return number 52", function() {
  expect(fizzbuzz(52)).toEqual(52);
});

test("150 should return fizzbuzz", function() {
  expect(fizzbuzz(150)).toEqual("fizzbuzz");
});



