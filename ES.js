/* problem one */
var nums = [];
for (var i = 0; i < 3; i++) {
  nums.push(i);
}

console.log(i); //3
console.log(nums); //[0,1,2]

/*  problem 2  */
const s = [5, 6, 7];
s[2] = 45;
function editInPlace() {
  const x = s.reverse();
  return x;
}

/* problem 4 */
/* prevent Mutation */
let obj = { name: "wafi", review: "Awesome" };
Object.freeze(obj);

/* problem 5:from normal notation to  arrawo function */
var magic = function () {
  return new Date();
};

/* problem 6:from normal notation to  arrawo function; */
var myConcat = function (arr1, arr2, x) {
  if (x > 1) {
    return arr1.concat(arr2);
  }
  return null;
};

/* Problem 7:Set Default Parameters for Your Functions */

const sayHello = (name = "sabrine") => `hello ${name}`;

/* problem 8: rest Parameter */
function howMany(...arguments) {
  console.log(arguments);
}

howMany(1, 2, 3);
howMany(1, 2);
howMany("string", null, [1, 2, 3], {});

/* problem :res parameter */
const sum = (...args) => {
  return args.reduce((a, sum) => a + sum, -1);
};
sum(1, 2, 3);

/* problem 9:Object Property Shorthand */
const createObject = ({ x, y }) => {
  return { name, lastName };
};
createObject({ name: "wafi", lastName: "benjeddou" });
//

const createObjectX = (a, b) => {
  return { a, b };
};
console.log(createObjectX(10, 20));
//

/* Problem 10: method from an object */
const user = {
  email: "wafi@benjeddou.com",
  password: "5555",
  confirm() {
    if (this.password.length > 8) {
      return true;
    } else {
      return "you must type another password";
    }
  },
};

/* Problem 11:Class */

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const x = new Vegetable("new");


