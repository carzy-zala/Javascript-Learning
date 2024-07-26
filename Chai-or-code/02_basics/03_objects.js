// singleton - we can't create a instance of that particular objvct is called singletonn

// object constructor - it creates a singleton
// object.create 

// object literals - it doesn't create singleton

const mySym = Symbol("key1")

const JsObject = {
    name : "Jayraj",
    [mySym] : "mykey1",
    "full name" : "Jayrajsinh zala"
}

console.log(JsObject);
console.log(JsObject.name);
console.log(JsObject["full name"]);
console.log("mySymb access without [] : ", JsObject.mySym);
console.log("mySymb access without [] : ", typeof JsObject.mySym);
console.log("mySymb access with [] : ", JsObject[mySym]);
console.log("mySymb access with [] : ", typeof JsObject[mySym]);

// freeze method
// Object.freeze(JsObject); // it help to stop changing valur of object ,  it not give error if we change value

JsObject.greeting = function () {
    console.log("Hello");
}


JsObject.greetingTwo = function () {
    console.log(`Hello ${this.name}`);
}

console.log("greeting function without () ", JsObject.greeting );
console.log("greeting function : ",JsObject.greeting());
console.log("greetingtwo function : ",JsObject.greetingTwo());