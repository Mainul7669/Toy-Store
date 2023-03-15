//3! = 3*2*1
//4! = 4*3*2*1

// function factorial(number){
//     let result = 1;
//     for(let i = 1; i<=number; i++){ 
//         result = result * i;
//     }
//     return result;
// }

// const result = factorial(9);
// console.log(result);


//FActorial reverse
// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){ 
//         result = result * i;
//         console.log(i);
//     }
//     return result;
// }
// const number = 6;
// const fact = factorial(number);
// console.log('factorial of:', number, fact);


// with While loop
// function factorial(number){
//     let num = 1;
//     let result = 1;
//     while(num <= 7){
//         result = result * num;
//         num++;
//     }
    
//     return result;

//     }

// const number = 6;
// const fact = factorial(number);
// console.log('factorial of:', number, fact);

//Reverse way While
function factorial(number){
    let i = number;
    let result = 1;
    while(i >= 1){
        result = result * i;
        i--;
    }
    
    return result;

    }

const number = 6;
const fact = factorial(number);
console.log('factorial of:', number, fact);
