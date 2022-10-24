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

/* Problem 8:Check if a value is classified as a boolean primitive. Return true or false */
function booWho(bool) {
  return typeof bool === "boolean";
}

/* Problem 10 :change all falsy values in array to null in the same array using forEach */

function bouncerNull(arr) {
  arr.forEach((elt, index) => {
    if (elt) {
      arr[index] = elt;
    } else {
      arr[index] = null;
    }
  });
  return arr;
}
/* Problem 11 :Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */
function bouncer(arr) {
  let table = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      table.push(arr[i]);
    } else {
      continue;
    }
  }
  return table;
}
/* problem 12:Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number. */
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}
/* Problem 13:another method */
function getIndexItem(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  let i = 0;
  do {
    i++;
  } while (arr[i] != num);
  return i;
}
/* problem 13:palindrome checker */
function palindrome(str) {
  const noWhitespace = str.replace(/\s/g, "").toLowerCase();
  let STR = "";
  for (let i = noWhitespace.length - 1; i >= 0; i--) {
    STR = STR + noWhitespace[i];
  }
  if ((STR = noWhitespace)) {
    return true;
  } else {
    return false;
  }
}
/* radar */
/* problem 14:optimisation */
function palindromeChecker(str) {
  const strWithoutSpaceAndSymbol = str
    .replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s/g, "")
    .toLowerCase();

  for (let i = 0; i < strWithoutSpaceAndSymbol.length / 2; i++) {
    if (
      strWithoutSpaceAndSymbol[i] !==
      strWithoutSpaceAndSymbol[strWithoutSpaceAndSymbol.length - 1 - i]
    ) {
      return false;
    }
  }
  return true;
}

/* problem:15:Sum All Numbers in a Range
For example, sumAll([4,1]) should return 10 */
function sumAll(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    sum = sum + i;
  }
  return sum;
}

/* problem 16:Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. */
/*  [1, 2, 3, 4, 5],[1, 2, 3, 5] should return [4] */
/* --------------- */ /* */
function diffArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i] && i != j) {
        arr[j] = 0;
        arr[i] = 0;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/* Problem 17:Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */
function spinalCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((elt) => {});
}
//problem 18:from two arrays return the repeated elment once in  a table
function repeatedElementInarray(arr1, arr2) {
  let array = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        array.push(arr2[j]);
      } else {
        continue;
      }
    }
  }
  return array;
}

/* problem 18:another solution */
function repeatedElementInarrayWithSet(arr1, arr2) {
  let array = new Set([...arr1, ...arr2]);
  return array;
}
/* problem:19 given an object with key value  :increment all the value with one  */
function obJINcremnt(obj) {
  for (let key in obj) {
    obj[key] = obj[key] + 1;
  }
  return obj;
}

/* problem:20reverse a table  */
/* [1,4,15]=>[15,4,1] */
function reverseTable(table) {
  let ReversedTable = [];
  for (let i = table.length - 1; i >= 0; i--) {
    ReversedTable.push(table[i]);
  }
  return ReversedTable;
}
/* Proble 21:search through an object*/
function getMin(obj, x) {
  for (let key in obj) {
    if (obj[key] === x) {
      return true;
    }
  }
  return false;
}
/* problem 22:add element to table */
function incrementElement(tab, n) {
  let len = tab.length + 1;
  tab[len - 1] = n;
  return tab;
}
/* problem 22:add element to table */
/* another method with instance */
function incrementElementWithInstance(tab, n) {
  let list = new Array(tab.length + 1);
  list = tab;
  list[list.length] = n;
  return list;
}

/* problem 23:check if a string is inclided in another */
/* function check("hello","hello")=>false beacause y does not exist on hello*/
/* check("hello", "Hello") should return true */
/* check("zyxwvutsrqponmlkjihgfedcba", "qrstu") should return true */
/* check("Mary", "Army") should return true */

function check(str1, str2) {
  const object = {};
  for (let i = 0; i < str1.length; i++) {
    let k = 0;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        k++;
        object[str2[j]] = k;
      }
    }
  }
  let len = Object.keys(object).length;
  for (let key in object) {
    if (object[key] > 1) {
      len += 1;
    }
  }
  if (len === str2.length) {
    return true;
  } else {
    return false;
  }
}
/* world in table     */
/*  hello and welcome to the jungle==>[hello, and, welcome, to, the, jungle] */
function wordInTable(str) {
  let table = [];
  let i = 0;
  let string = "";
  while (i <= str.length - 1) {
    if (str[i] !== " ") {
      string += str[i];
    }
    if (str[i] === " " || i === str.length - 1) {
      table.push(string);
      string = "";
    }
    i++;
  }
  return table;
}

/* problem 24 */
/* titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot */
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((elt) => {
      return elt.replace(elt[0], elt[0].toUpperCase());
    })
    .join(" ");
}

/* problem 25:check the number of vowels in a string*/
function check(str) {
  let i = 0;
  const table = ["a", "e", "i", "o", "y", "u"];
  let countVowels = 0;
  while (i < str.length) {
    for (let j = 0; j < table.length; j++) {
      if (str[i] === table[j]) {
        countVowels++;
      } else {
        continue;
      }
    }

    i++;
  }
  return countVowels;
}

/* problem 26 :given an a string replace a word */
/* myReplaceWithoutPredefined("hello  wafi benjeddou", "wafi", "ashref")=> "hello  ashref benjeddou"  */
function myReplaceWithoutPredefined(str, before, after) {
  let tableOfWord = wordInTable(str);
  let string = " ";
  for (let i = 0; i < tableOfWord.length; i++) {
    if (tableOfWord[i] === before) {
      tableOfWord[i] = after;
    }
    string += " " + tableOfWord[i];
  }
  return string;
}
/* problem 27 :Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array */
/* Waiting:chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]] */
/* chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]] */
function chunkArrayInGroups(arr, size) {
  let array = [];
  let nestedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (nestedArray.length < size || nestedArray.length < i - size - 1) {
      nestedArray.push(arr[i]);
    }
    if (nestedArray.length === size) {
      array.push(nestedArray);
      nestedArray = [];
    }
  }
  return array;
}

/* problem 28:You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array. */
/* frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5] */
function frankenSplice(arr1, arr2, n) {
  let arr = [];
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (i < n) arr.push(arr2[i]);
    if (i >= n && i < n + arr2.length - 1) arr.push(arr1[i - n]);
    if (i >= n + arr2.length - 1) arr.push(arr2[i - (arr2.length - 1)]);
  }
  return arr;
}
//problem 29: write a function that return the arguments of function into table
//getArguments("5",6")===>["5",6]
//getArguments("5")===>["5"]

function getArguments(arr) {
  let table = [];
  for (let key in arguments) {
    table.push(arguments[key]);
  }
  return table;
}
//problem 30:
/* Seek and Destroy;
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */
/* destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]. */
/* destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1] */
function destroyer(arr) {
  let argumentFunction = [];
  for (let key in arguments) {
    if (key !== "0") {
      argumentFunction.push(arguments[key]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < argumentFunction.length; j++) {
      if (arr[i] === argumentFunction[j]) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
}

/* problem:31: Wherefore art thou */
/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array. */
/* whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }] */
function whatIsInAName(collection, source) {
  const arr = [];

  collection.forEach((elt, index) => {
    for (let key in source) {
      console.log(elt[key]);
    }
  });
}
/* whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
); */

//problem:31:Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
/* Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 ) */
/* [3,1,7,9,2,4,1,9] */
function sumDiffrent(tab1, tab2) {
  const tab = [...tab1, ...tab2];
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length; j++) {
      if (tab[i] === tab[j] && i != j) {
        tab[i] = 0;
        tab[j] = 0;
      }
    }
  }
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
  }
  return sum;
}
/* problem 31 :another solution with hashTable */
function different(tab1, tab2) {
  const tab = tab1.concat(tab2);
  const obj = {};
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    if (!obj.hasOwnProperty(tab[i])) {
      obj[tab[i]] = 0;
    } else {
      obj[tab[i]]++;
    }
  }
  for (let key in obj) {
    if (obj[key] === 0) {
      sum += Number(key);
    }
  }
  return sum;
}

/* problem 32:Given two sets of elements, find the sum of all equal elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Set 1: [12, 13, 6, 10]
Set 2: [13, 10, 16, 15]
Sum of overlapping elements: 46 */
/* [12,13,6,10,13,10,16,15] */
function sumEqual(tab1, tab2) {
  const tab = tab1.concat(tab2);
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length; j++) {
      if (tab[i] === tab[j] && i != j) {
        sum += tab[i];
      }
    }
  }
  return sum;
}
// problem32:another solution with hashTable
function equal(tab1, tab2) {
  const tab = tab1.concat(tab2);
  const obj = {};
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    if (!obj.hasOwnProperty(tab[i])) {
      obj[tab[i]] = 0;
    } else {
      obj[tab[i]]++;
    }
  }
  for (let key in obj) {
    if (obj[key] !== 0) {
      sum += 2 * Number(key);
    }
  }
  return sum;
}
console.log(equal([12, 13, 6, 10], [13, 10, 16, 15]));
