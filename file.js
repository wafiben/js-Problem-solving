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
  let tableo = [];
  let STR = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (str[j] == " ") {
        STR = table.push(str);
      }
    }
  }
}

