/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

console.log("How i can help u")
let num3, num4;
num4 = Math.random();
console.log(num4)


let num1 = prompt("Enter first Value", "0");
let num2 = prompt("Enter second Value", "0");



if (num4<=0.1) {
    console.log(`The sum is ${num1-num2}`)
    console.log(`The subtract is ${num1/num2}`)
    console.log(`The multiple is ${num1+num2}`)
    console.log(`The divide is ${num1**num2}`)
} else {
    console.log(`The sum is ${num1+num2}`)
    console.log(`The subtract is ${num1-num2}`)
    console.log(`The multiple is ${num1*num2}`)
    console.log(`The divide is ${num1/num2}`)
}


// eval function can also be used 

