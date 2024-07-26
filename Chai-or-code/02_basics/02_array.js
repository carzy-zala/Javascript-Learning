const arr1 = [1,2,3]
const arr2 = [4,5,6]
arr1.push(arr2) // push perform in existing array
console.log("arr1.push(arr2) : ",arr1);

const arrAfterMerge = arr1.concat(arr2) // concate return new array
console.log("arr1.concat(arr2) : " , arrAfterMerge);

// spread operator to get new array
const newArray =  [...arr1,...arr2]
console.log("spread operator : ",newArray);

// flat array
const tempArr = [1,2,3,[4,5],6,[6,7,[8,9,[10,11,12]]]]
console.log("flat with 2 depth : ",tempArr.flat(2));
console.log("flat with infinte depth : ",tempArr.flat(Infinity));

// isArray
console.log("isArray(Zala) : ",Array.isArray("zala"));

// from
console.log("from(zala) : ",Array.from("zala")); // to convert in array
console.log("from({name:zala}) : ",Array.from({name:"zala"}));
console.log("from({name:zala}) : ",Array.from(Object.keys({name:"zala"})));

// of
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log("of : " ,Array.of(score1,score2,score3));
