//write a JS function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// ==>I solved Like this
// function make_avg(array) {
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum / array.length;
//   }

//   var array = [1,2,3,4,5];
// console.log(make_avg(array));


// write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.

// function getSumOfAnArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index]
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray(myNumbers);


//Get Odd Numbers of an array and get odd Sum of an array
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(index, element);
        if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}


const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);

console.log('odd number sum', oddNumberSum);
