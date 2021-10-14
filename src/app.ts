//interfaces
//define an interface
interface IsPerson{
    name: string;
    age: number;
    speak(a: string):void;
    spend(a:number):number;
    skills: number[]
}

//the object "me", since it is of type "IsPerson", must comply with what was defined in the interface
const me:IsPerson = {
    name: "shaun",
    age: 30,
    speak(text:string):void{
        console.log(text)
    },
    spend(amount:number):number{
        console.log(`I spent, £${amount}`);
        return amount
    },
    skills: [1,2,3]
};

let someone: IsPerson;

const greetPerson = (person: IsPerson)=>{
    console.log("hello", person.name )
}

greetPerson(me);



console.log(me);

import {Invoice} from "./classes/Invoice.js";
//console.log(form.children); 
//classes



const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

//we can modify the properties in the instances
// invOne.client = "yoshi";
// invTwo.amount = 1234;


let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);


invoices.forEach(inv=>{
    console.log(inv.client, inv.amount, inv.format()); 
})

// const anchor = document.querySelector("a")!;

// // if(anchor){
// //     console.log(anchor.href);
// // }

// console.log(anchor.href);


// const form = document.querySelector("form")!;


//type casting to define what type this element is going to be
const form = document.querySelector(".new-item-form") as HTMLFormElement;






//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
})

