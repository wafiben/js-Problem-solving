/* Problem 1 */ /* rejex method test */
const testReGex = /wafi/;
const test = (str) => {
  if (testReGex.test(str)) {
    return true;
  } else {
    return false;
  }
};
console.log(test("wafi and wafi development"));
/* problem1-2 :Apply the regex myRegex on the string myString using the .test() method. */
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex;
/* problem 2:Match a Literal String with Different Possibilities */
/* have a string and want to test if it contain go or my or code */

/* problem 2-1:change the if statement of the solution to a ternary condition */

/* problem :3:return the sum of the vowels in the string using regex */
const getCount = (str) => {};

/* problem 4:using flag in regex */
/* test if a string contain ignorecase or igNoreCase or IgnoreCase */
const y = (str) => {
  let reg = /ignorecase/i;
  return reg.test(str);
};

/* problem 5:problem 3 with flag */
const getCountFlag = (str) => {
  
};

/* problem :6:match :brise de glace*/ //flag g
/* problem 3 with match */

/* example */
/* let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g
const found = testStr.match(ourRegex);
console.log( "sssss",found); */ //[repeat,repeat,repeat]

/* problem 7: Wildcard caracter */
/* example;
let humStr = "I'll hummssssssssasong";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr)); */

/* Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character. */
/* let exampleStr = "Let's have sunsssss un un un  with regular expressions!";
let unRegex = /.un/;
let x = unRegex.test(exampleStr);
console.log("hhhhhhhhhhhhhhh", x); */

/* the same do it with match and return table that contain every wordls run fun sun */
const z = (str) => {};

/* problem 8:character classes */
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/g;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

/* same problem of vowels count using class caracter */
const er = (str) => {};

/* Problem 9:set a range to rejex expression */
const countRange = (str) => {
  const rejex = /[0-9]/g;
  return str.match(rejex).length;
};
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let regex = /[a-e]at/;
catStr.match(regex); //
batStr.match(regex);
matStr.match(regex);
/*  problem 9-1:want to calculate the number of characters that contain letters a b c d e */

/* problem 9-2 :Match all the letters in the string */
/* and then return them in atable  */
/* hello wafi 12 benjeddou it here 2022 ===>[ 'hello', 'wafi', 'benjeddou', 'it', 'here' ] */
const cal = (str) => {};
console.log(cal("hello wafi 12 benjeddou it here 2022 "));
