// The syntax for this function is valid but it has an error, find it and fix it.

function trimWord(word) {
  return "hello  " + word;
}
let anwser1 = trimWord("salem");
console.log(anwser1);

function getStringLength(name) {
  let nameLength = name.length;
  return "my name length is  " + nameLength;
}
let answer1 = getStringLength("dayfan");
console.log(answer1);

function multiply(a, b, c) {

 return  2 * 4 * 6;
  
}
let answer2 = multiply(2, 4, 6);
console.log(answer2);

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 2-logic-error` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
===================================================
*/
/*
test("trimWord trims leading and trailing whitespace", () => {
  expect(trimWord("   CodeYourFuture ")).toEqual("CodeYourFuture");
});

test("trimWord doesn't remove whitespace in the middle of the string", () => {
  expect(trimWord(" CodeYourFuture teaches coding     ")).toEqual(
    "CodeYourFuture teaches coding"
  );
});

test("getStringLength returns the length of a word", () => {
  expect(getStringLength("Turtles")).toEqual(7);
});

test("getStringLength returns the length of a sentence", () => {
  expect(getStringLength("A wild sentence appeared!")).toEqual(25);
});

test("multiply multiplies numbers", () => {
  expect(multiply(2, 3, 6)).toEqual(36);
});

test("multiply multiplies different numbers", () => {
  expect(multiply(2, 3, 4)).toEqual(24);
});
*/