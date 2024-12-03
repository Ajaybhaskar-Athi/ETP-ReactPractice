//class

class Student{
    school="SSV";
    constructor(name,age){
        console.log("The student constructor called.");
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} ,studying in ${this.school}`);
    }
    
    getMarks=(marks)=>{
        console.log(`Marks: ${marks}`);
    }
    sum(...numbers){ //rest operator
    return numbers.reduce((total,num)=>total+num,0);
    }

}

const obj=new Student("Ajay",20);
obj.greet();
obj.getMarks(45);
console.log("The Sum of 1,2,3,4: ", obj.sum(1,2,3,4));

//Arrow Functions
//Arrow functions are a shorthand way of writing functions in JavaScript. They are defined using the arrow operator
const square=x=>x*x;
const mul=(a,b)=>a*b;
const add=(a,b)=>{
    return a+b;
}
console.log("Square: ",square(9));
console.log("Multiplication: ",mul(2,3));
console.log("Addition Functions: ", add(45,45));

// ---------------------------************************----------------------

//varibales (let and const are block scope varibales means they are accesbile only within the block they are defined)
//let- block-scoped : cannot be redeclared in the same scope

// ------------------

{
    let a=10;
     a=15;
    const c=20;
        // c=25;//constants are not reaassingned
        console.log("Inside Block : Value of a: ",a,"Value of c: ",c);
}

// console.log(a);//Reference Error: a is not defined
// console.log(c);//Reference Error: c is not defined

// var Example (Function Scoped: they are accessible throughout the function or globally if declared outside any function, even outside of a block.)

{
    var x=20;
    console.log("Inside Block : Value of x: ",x);
}
console.log("Outside the Block ,Accesing same var which is inside block: ",x);


function helper(){
    var y=10;
    console.log("Inside helper function: ",y);
}
helper();
// console.log(y);//Reference Error: y is not defined


// -----------------------------******************----------------------

//objects:

const Person={
    name:"jhon",
    age:45,
    fun:()=>{
        console.log("Function called inside object",Person.name);
    }
}
Person.fun();



// ---------------*****************---------------

// The .map() method primary function is to creates a new array by applying a function to each element of the original array.
const nums=[1,2,3,4];
const doubled=nums.map(num=>num*2);
//also useful for traversing

console.log("Original Array");
nums.map(num=>console.log(num));

console.log('now doubled Array')
doubled.forEach((num)=>{
    console.log(num);
})


// ------------------********************-------------------

// DESTRUCTURING 
// Destructuring is a way to unpack values from arrays or objects into distinct variables.

// -Used to extract values from an array into variables.
const fruits=['apple','banana','tamarind','mango'];
const[red,yellow,brown]=fruits;
console.log(red,yellow,brown); //apple banana tamarind


//- Used to extract properties from an object into variables.

const person={
    name:"Ajay",
    age:20
}
const{name,age=45,city="unknown"}=person;
console.log(name,age,city); //Ajay 20 unknown




// ------------------********************-------------------

//SPREAD OPERATOR
// The spread operator is a feature in JavaScript that allows an iterable (such as an array ) .
//simply when we use 3 dots inside square brackets then its called spread opeprator


//-Spread in Arrays

const arr1=[1,2,3,4];
const arr2=[arr1,5,6,7]; //we are placing direct array into it ,and it refrences to the memory of original array
const a2=[...arr1,5,6,7]; //just elements of arr1 are spreaded into it
arr1.push(34);
console.log(arr2);//[ [ 1, 2, 3, 4,34 ], 5, 6, 7 ]
console.log(a2); //[ 1, 2, 3, 4,5, 6, 7]

//-Spread in Objects 

const obj1={a:1,b:2};
const obj2={b:3,c:4};
const combined={...obj1,...obj2};
console.log(combined); //{ a: 1, b: 3, c: 4 }




//REST OPERATOR: the 3 dots inside circle brackets is called REST operator
// it is used to get the remaining elements of an array or object


const display=(...numbers)=>{
    console.log("numbers Arrays: ", numbers);
    numbers.forEach((ele)=>{
        console.log(ele);
    })
}


display(1,2,3,4,5,6);


/*
Rest operator: Collects values into an array.
Spread operator: Expands an array or object into individual elements.

*/