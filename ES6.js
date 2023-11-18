//Export import file

// export let arrow = () => {
//     console.log("haryana")
// }
// arrow()

// import * as file from './practise';

// file.arrow()

//Spread or rest operator (...)

//Spread operator help to access other array elements.

let arrr = ["NIlu", "kul", "kittu"];
let arrr2 = [...arrr, "jitu"];
console.log("arrr2:", arrr2);

// rest operator
// spread parameters from functions
//rest operator - it used in func

let fun = (...all) => {
  console.log(all);
};
fun(5, 4, 3);

//Array distructuring.

//  let car = ["audi","bmw","mercedes"]
//  let [car1, car2, car3]= car
//  console.log('car:', car2)

let car = ["audi", "bmw", "mercedes"];
let [car1, car2] = car;
console.log("car:", ...car);

//object distructing

let person = {
  name: "shiv",
  age: 23,
};

let { name, age } = person;
console.log(name);

//Map method array

// let arra1=[1,2,3,4,5]
// let arra2=arra1.map(x=> x*2)
// console.log('arra2:', arra2)

//Filter method array

let arra1 = [1, 2, 3, 4, 5];
let arra2 = arra1.filter((x) => x % 2 == 0);
console.log("arra2:", arra2);


// console.log(
//   "arr1:",
//   arr1.map((el) => el * 2 ** 2)
// );

// console.log(
//   "arr1:",
//   arr2.filter((el, indexes) => indexes[2] > 1)
// );

//arrow function

let myname = (name) => {
  console.log(name);
};

myname("jay");

//shortcut
let gname = (name) => name;
console.log(gname("Jay singh"));

//easy shortcut arrow

let lname = (double) => double * 2;

console.log(lname(5));