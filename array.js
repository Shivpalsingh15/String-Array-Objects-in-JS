
// EVERTHING IN JS IS OBJECT.....
let arr  = []
//   1) .length give size of array 
let arr1 = [1, 2, 3, 4]
let arr2 = ['kuldeep', 'shiv', 'nilesh']
// in array  indices starts from 0 
// why index starts from 0
//  When you start indexing from 0, you can directly calculate the memory address of the element you want without having to add 1. This saves time and makes the code more efficient.
// console.log(arr1.length)
// console.log('arr2:', arr2[1][2]) // i
// console.log('arr2:', arr2[1]) // shiv

//  2) indexOf  
// return the index of the element in array 
// console.log(arr2.indexOf("nilesh"))
//  if the element like nilesh is not found in tht arr this method will return -1

// let a = [1,2,3,0];
// let b = [151];
// console.log("index",a.indexOf(2));
// 
//  3) .push(element)
// add the element at the end of the array
arr2.push(...arr1)  // ...arr means destructing the arr (spread all its elements)
// console.log(arr2)
// console.log('mmmm',arr2.push('Hello')) // imp : this method returns the new length of the array
// 4) .pop()
// remove the element at the end of the array
let ab = arr1.pop() // it returnsthe removed element 
// console.log('ab:', ab)
// console.log(arr1.pop())
// 
// 

// destructing example
// function myfunc(){
//     return 'hey shipu'
// }

// let myreturn = myfunc()
// console.log('myreturn:', myreturn)
// please note return fuction always we have to catch & whatever comes below/after return will not excutes

// 5) .shift()  this method will remove the element at the First of the array.

let arr3 = [1, 2, 3, 4, 5]
arr3.shift()
// console.log('arr3:', arr3)// remove 1 from end of the array.
//arr3.shift() returns that removed element.(1)

// 6) .unshift()  this method will add the element at the First of the array.

let arr4 = [1, 2, 3, 4, 5]
// console.log(arr4.unshift(8))
// console.log('arr4:', arr4)// add new element (8) front of the array.
//arr4.unshift() returns that updated array length.


// 7) .fill() this method will change the element within the range of indexes by static value and  **  returns modified array 

// .fill(x , y  , z)
// x is the startic value
// y & z  is range of start and end indexes
// if z is not given  it will filled till the last index
// and if y is also not given  all the elements will be filled by static value
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

/*
8) .filter()
The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
it returns array 
*/
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present', "njks", "ghvh", "bjcbsj", "sjk"];

// const result = words.filter((el, index)=>{
//     if(index<3){
//         return el
//     }
     
// });
// const result = words.filter((word) => word.length > 6);
// const result = words.filter((el, index)=>{
//     if(index>=5 && index<=8){
//         return el
//     }
     
// });
// there is  another way to write this above code 
let result = words.filter((el, index)=> index>=5 && index<=7)
// so above also same way NOTE; IF useing {} then imp to use return keyword 
// otherwise direct way => here code     [ no {} no return keyword]
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


/*
9) .find()
The find() method of Array instances returns {the first element }in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
*/
//  call back fucntion are function which are passed as argument to other functions

//10) The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
const arr12 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = arr12.concat(array2);

console.log(array3);1
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

let a = [1230];
let b = [151];
let c  = a.concat(b);
console.log('c:', c)

//$ node practise.js 
c: [ 1230, 151 ]


//11) The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// let arr11 = ["a", "b", "c"];
// console.log('arr1:', arr11.includes("b"));


// //12)The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat());
// // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(2));
// // expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr2.flat(Infinity));
// // expected output: Array [0, 1, 2, 3, 4, 5]

/*
13) isArray()
The Array.isArray() static method determines whether the passed value is an Array.
ex : let arr = []
syntax uis imp 
console.log(Array.isArray(marr))
convrntion...
firstName  camel 
first_name   // pascal 

14) .join()
this is help to convert the arr to string 
if arr.join() // it will sepearet by comma 's
if arr.join('') // it will no spaces
if arr.join('-') // it will separate by - in each element 

15) .lastIndexOf()
The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));

16) .map()
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.


div 


arr.forEach((el) => <div>   
<p>el.name</p>               
forEach && map are same but DIFF IS MAP RETURN ARRAY AND FOREACH DOESNOT RETURN ARRAY 
<img>el.url</img>
<p>el.price</p>
</div>)
arr.forEach((el) => <div>   
<p>el.name</p>
<img>el.url</img>
<p>el.price</p>
</div>)

*/

let xarr = [1,2,3,4,5,6]

let ou = xarr.forEach((el,i)=> el*4   )
// console.log('ou:', ou)  YOU WIL GET UNDEFINED BCOZ .forEach() dones not return arr
// let ou = xarr.map((el,i)=> el*3 )
// console.log('ou:', ou)   YOU WIL GET complet arr (ou ) BCOZ .map() returns arr

/*
17) .reudce()
it reduces our arr to single value it takes a function where we wrote our logic as per our requirement 
ex 

*/
// let rarrr = [5,2,3,4,5]
// // let mysinglevalue = rarrr.reduce((acc , el)=> acc+el)
// // console.log('mysinglevalue:', mysinglevalue)
// // if u want to find the sum of arr elements
// // console.log(rarrr.reduce((acc , el)=> acc+el))
// let tarr  = [1,2,3,4]
// let tsum =0;
// for(let i=0; i<=tarr.length-1; i++){
//     tsum+=tarr[i]
// }    
// console.log(tsum)
// very imp to notice the conditionalin loop i<arr.length or i<=arr.length-1 but never use i<=arr.length bcz it will give undefined at last
// 
// 

let obj = {
    name: 'nilesh' , 
    2 : 'jhasgc',
    greet: function(){
        console.log('ha bhai')
    }
}
// the function which is inside the obj is called as method 
// console.log(obj.greet())

//18) .reverse() it reverse the arr
let ex = [1,2,3]
console.log('ex:', ex.reverse()) //ex: [ 3, 2, 1 ]


/*
19) .slice()
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
imp::::::: - The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

20).splice()
The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice()

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

*/


 
