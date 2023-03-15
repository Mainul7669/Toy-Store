// let sum = 0;
// for(let i = 1; i<=5; i++){
//     sum = sum + i;
// }

// console.log(sum);

// let sum = 0;
// for(let i = 5; i>=1; i--){
//     sum = sum + i;
// }

// console.log(sum);

// function sum(i){
//     if(i==1){
//         return 1;
//     }
//     return i + sum(i-1);
// }

// console.log(sum(5));

/*

   5 + sum(4)
   5 + 4 + sum(3)
   5 + 4 + 3 + sum(2)
   5 + 4 + 3 + 2 + sum(1) 
   5 + 4 + 3 + 2 + 1 = 15
*/



// let factorial = 1;
// for(let i = 5; i>=1; i--){
//         factorial = factorial * i;
//     }

//     console.log(factorial)


function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i - 1);
}

console.log(factorial(5));

/*
   5 * factorial(5-1)
   5 * 4 * factorial(4-1)
   5 * 4 * 3 * factorial(3-1)
   5 * 4 * 3 * 2 * factorial(2-1)
   5 * 4 * 3 * 2 * 1 = 120
 */