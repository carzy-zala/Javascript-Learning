const obj1 = {1:'a',2:'b',a:"A"}
const obj2 = {3:'a',4:'b'}

// const obj3  = Object.assign(obj1,obj2) // like all merge is go into obj1
const obj3 = Object.assign({},obj1,obj2)
console.log(obj1);
console.log(obj3);

console.log("Object.keys() : ",Object.keys(obj3))
console.log("Object.values() : ",Object.values(obj3))
console.log("Object.entries() : ",Object.entries(obj3))
console.log(obj3.hasOwnProperty('1'));
console.log(obj3.hasOwnProperty('name'));

// destructuring of object - it helps us to use property as variable directly without using (.)dot notation

const {1:one,a} = obj1
console.log(one);
console.log(a);