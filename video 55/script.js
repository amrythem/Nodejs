console.log("Hello, World!")

let a=5;
a=a+1;
let b=6;
let c="arpit";
let _a="arpit";
// var 20a="arpit"; // This will throw an error because variable names cannot start with a number
// console.log(a + b + c);
// console.log(typeof a, typeof b, typeof c);
{
    let a =66;
    console.log(a); // This will log 66, the block-scoped variable
    // var is a gloal variable
}
console.log(a);
// const a1=6;
// a1=a1+1; // This will throw an error because a1 is a constant

let x = "arpit";
let y = 22;
let z = 3.35;
const p = true;
let q = undefined;
let r = null;

console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    "name": "arpit",
    "age": 19,
}

console.lpg(o);
o.age = 20; // This is allowed, as we are modifying a property of the object
console.log(o);
o.age = 21; // This is also allowed, as we are modifying a property of the object
console.log(o);