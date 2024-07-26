// Arrays

// [] : brackets
// () : paranthesis
// {} : curly braces

// shallow copy means the copy share the same type of properties reference points
// deep copy :  it means copy do not share the same type of properties refernce ponts



// -------------------------------------- Array ------------------------------------------------------ 

// - array can be mixed type in JS
// - array can be resized in JS
// - arrays are shallow copy not deep copy 
// - array indexing is start with the 0

// Declaration
const arr = [1,2,3,4,5,6]
const myarra = new Array(11,12,13,14)

// mehtods
arr.push(7)
console.log("push ",arr);

arr.pop()
console.log("pop ",arr);

arr.unshift(0)
console.log("unshift ",arr);

arr.shift()
console.log("shift ",arr);

console.log("includes ",arr.includes(4)) // to check 4 is include in array or not , give ans in boolean

console.log("index of " , arr.indexOf(4)) // to get index of 4 

arr.push(4)
console.log("arr ",arr);
console.log("index of ",arr.indexOf(4)) // note here that it gives first index of 4 in array

console.log(typeof arr.join())

const myarr1 = arr.slice(1,3)
console.log("arr ",arr);
console.log("myarr1 ",myarr1);

const myarr2 = arr.splice(1,3)
console.log("arr ",arr);
console.log("myarr2 ",myarr2);
