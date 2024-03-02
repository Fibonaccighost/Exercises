console.log("Factorial of a Number")

let n= prompt("Enter a integer value")

let arr=[]

for (let i = n; i >= 1 ; i--) {
    arr.push(i)
}

console.log(arr)

// function red(a1,a2) {
//     return a1*a2;
// }

const red=(a1,a2)=>{
    return a1*a2;
}

console.log(arr.reduce(red))

function Factorial(i) {
    if (i>1) {
        return (i*Factorial(i-1));
    } else if (i==0 || i==1) {
        return 1;
    }
}

console.log(Factorial(n))

