/* problem 1 :celcius to fahrenheit */
function convert(celTemp) {
  return (celTemp * 9) / 5 + 32;
}
/* problem 2:reverse a string */
function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString;
}

/* problem 3: factorial of number */
function factorial(n) {
  let product = 1;
  let i = n;
  while (i > 0) {
    product = product * i;
    i--;
  }
  return product;
}
/* problem 4:Return the length of the longest word in the provided sentence. */
function lengthOfWord(str) {
  let table = str.split(" ").map((elt) => elt.length);
  return Math.max(...table);
}
/* proble 4:Return Largest Numbers in Arrays from subsarrays */
function largestOfFour(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.max(...arr[i]);
  }
  return arr;
}
/* problem 5:Check if a string (first argument, str) ends with the given target string (second argument, target). */
/* example */ /* confirmEnding("Bastian", "n") should return true */
/* confirmEnding("Congratulation", "on") should return true. */
function confirmEnding(str, target) {
  let STR = "";
  for (let i = str.length - target.length; i < str.length; i++) {
    STR = STR + str[i];
  }
  if (STR === target) {
    return true;
  } else {
    return false;
  }
}
/* Problem 6:Repeat a given string str (first argument) for num times (second argument) */
/* repeatStringNumTimes("*", 3) should return the string *** */
function repeatStringNumTimes(str, num) {
  let STR = "";
  for (let i = 0; i < num; i++) {
    STR = STR + str;
  }
  return STR;
}
/* Problem 7:Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */
/* truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket.... */
/* "A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket */
function truncateString(str, num) {
  let i = 0;
  let STR = "";
  while (i < num) {
    STR = STR + str[i];
    i++;
  }
  if (str.length > num) {
    return STR + "...";
  } else {
    return str;
  }
}
