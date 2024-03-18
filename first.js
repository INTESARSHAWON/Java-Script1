let fullName= "Intesar Shawon";
console.log (fullName);

let age=24;
age=30;
console.log (age);

let price=1000.05;
console.log (price);

// console.log("name"); ""etar moddhe ja thake direct print hoy,"" na thakle value print hoy
//let,const eigula js er variable caller, var use hoito 2015 er age
//var diye onkbar declare koa jay, healthy na
//let diye barbar change korle eror dekhabe, but system moto change kora jay value
//const diye value change hobe na, eta fixed; const beshi use hoy

let x = BigInt("123");
console.log (x);

//cosole a type of a sob dekha jabe;

let y = Symbol("Hello");
console.log (y);
//bigint ar symbol 


isFollow= true;
console.log (true);
// eta boolian, sudhu true ba false hoy


//premitive data types 7 rokomer hoy
// Number, String, Boolean, Undifined, Null, Bigint, Symbol

const student= {
     fullName: "Shawon",
     age:30,
     cgpa:3.50,
     isPass: true,
     //key: value
};


    console.log (student["fullName"]);
    //or
    console.log (student.fullName); 
    
    student["age"]= student["age"] +1;

    console.log (student["age"]);
    //or
    console.log (student.age);

    console.log (student["cgpa"]);
    //or
    console.log (student.cgpa);

    console.log (student["isPass"]);
    //or
    console.log (student.isPass);

// const diye dhora je object ache ogula change hoy, const diye dhora variable chage hoy na. 
// let ke update kora jabe, const ke na, but const er object thakle setake update kora jabe