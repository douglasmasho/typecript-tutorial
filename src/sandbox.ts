/*
//this is a string and can never be set to another type
let character = "luigi";
//this is a number and can never be set to another type
let age = 30;
//this is a bool and can never be set to another type
let isBlackBelt = false;

isBlackBelt = true;


//to specify the type use the : colon
const circ = (diameter:number)=> diameter * Math.PI;


console.log(circ(7.5))


//arrays
//it will only allow use to add strings into the array
let names = ["luigi", "mario", "yoshi"];

names.push("toad");

names.push(20);

names[0] = 3;


let numbers = [10,20,30,40];

numbers.push(25);
//cannot do this
//numbers.push("Douglas");
//numbers[0] = "Douglas"


let mixed = ["ken", 4, "chun-li", 8,9]
mixed.push("ryu");
mixed.push(99);
mixed[0] = 100;


//objects
let ninja = {
    name: "mario",
    belt: "black",
    age: 30
}

ninja.age = 40;

ninja.name = "Ryu";
//cannot do this
//ninja.age = "30";

//we cannot add extra properties either
//ninja.skills = ["fighting", "sneaking"];



//you can reassign the object  but the new object should have the same structure as the old one

//this is allowed

ninja = {
    name: "yoshi",
    belt: "orange",
    age: 40
}

//this is not allowed

ninja = {
    name: "yoshi",
    belt: "orange",
}

*/



/****************************************************************** */
/*
//explicit types
//when we declare a variable that is not initialized typecript cannot infer the type of the variable, so we will have to provide an explicit type
let character:string;
let age:number;
let isLoggedIn: boolean;

//age="luigi"
age = 30;


// isLoggedIn = 25;
isLoggedIn = true;

//arrays

// let arr: type[];
let ninjas: string[] = [];

//union types
//for arrays
let mixed: (string|number)[] = [];
mixed.push("Hello");
mixed.push(20);
console.log(mixed);

//for normal variables
let uid: string|number;
uid = "123";
uid = 123;
//uid=false


//objects
let ninjaOne: object;

ninjaOne = {
    name: "yoshi",
    age: 30,
}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string,
}

ninjaTwo = {name: "mario", age: 20, beltColor: "black"}

console.log(ninjaTwo);

*/



/////any type
/*
let age:any = 25;

age= true;
console.log(age);

age="hello";
console.log(age);

age = {name: "luigi"}
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed) 

//add a ? to make a property optional in the object type
let ninja:{ name:any, age?: any};
// ninja.name = "yoshi";
ninja = {name: "yoshi", age: 25};
console.log(ninja);

ninja = {name: 25, age: "yoshi"};
console.log(ninja);
*/

/***********************function types*********************** */
/*
let greet:Function;

greet = ()=>{
    console.log("Hello");
}

//the mandatory params should always come before the optional ones

const add = (a:number, b:number, c:number|string = 10):void=>{
    console.log(a+b);
    console.log(c);
}

add(5,10);
 
//ts will infer the return type of a function if it is not explicity typed
//this type will then be assigned to all other variables whose values have been assigned the return value of the function
const minus = (a:number, b:number): number=>{
    return a+b;
}

let result = minus(10,7);

*/

/***********************Type aliases****************/
/*
//a type alias is basically a variable that stores type specifications

type StringOrNum = string|number;
type ObjWithName = {name: string, uid: StringOrNum};

const logDetails = (uid:StringOrNum,item:string):void=>{
    console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: ObjWithName):void=>{
    console.log(`${user.name} says hello`);
}

const greetAgain = (user: ObjWithName):void=>{
    console.log(`${user.name} says hello`);
} 

*/


/***********************Function signatures****************/
//remember that a function signature does not mean that we are defining the function. it exists but it is not yet defined
//let greet:Function;

//the function should always match it's signature if it exists
//example 1
let greet: (a:string, b:string)=>void;
//a and b(names of parameters) can be any names when defining the function.
//in the future this variable can hold a function that follows this structure specifically
greet = (name:string, greeting:string)=>{
    console.log(`${name} says ${greeting}`)
}

//example 2
//the function calc takes in 3 args(a and must be a numbers, c must be a string) and it returns a number
//it must return a number so in all cases a number must be returned
let calc: (a:number, b:number,c:string)=>number|string

calc = (numOne:number, numTwo: number, action:string)=>{
    switch(action){
        case "add": return numOne + numTwo;
        case "minus": return numOne - numTwo;
        default: return "not allowed";
    }
}

console.log(calc(1,2,"add"));

//example 3
type person = {name:string,age:number}

let logDetails: (obj:person)=> void;

logDetails = (ninja:person)=>{
    console.log(`${ninja.name} is ${ninja.age} years old`)
}