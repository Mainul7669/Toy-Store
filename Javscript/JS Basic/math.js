// const result = Math.pow(3, 8);
// // console.log(result);

// const num1 = 25;
// const num2 = 45;

// const gap = Math.abs(num1 - num2);
// console.log(gap);
// if(gap < 5){
//     console.log('you guys can be friends');
// }
// else{
//     console.log('you guys stay apart');
// }


// ----------------
//  
// ------------------
// const number = 2.451245;
// const fullNumber = Math.round(number);
// // console.log(fullNumber);
// const result2 = Math.ceil(2.00001);
// const result3 = Math.floor(456.259);
// // console.log(result3); 


// ------------------
//  Random

// console.log(Math.random());
// for(let i = 0; i < 20; i++){
//     const random = Math.round(Math.random()*6);
//     console.log(random);
// }


// who will get the cake
// const jim = 69;
// const dela = 97;
// if(jim > dela) {
//     console.log('Jim will get the cake');
// }
// else{
//     console.log('Dela you will get the cake');
// }




// const jim = 69;
// const dela = 97;
// const chinku = 99;

// if(jim > dela && jim > chinku){
//     console.log('Jim will get the cake');
// }
// else if (dela > jim && dela > chinku){
//     console.log('Dela will eat cake in this bela');
// }
// else{
//     console.log('Chinku will get the cake');
// }



// Math.max(12, 45);


// Who is the tallest? Find the max number in an array
// function maxInArray(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const heights = [167, 190, 120, 165, 137, 265];
// const tallest = maxInArray(heights);
// console.log('tallest person is: ', tallest);





// Homework: Write a function to get the lowest number in an array
// function getLowest(num){
//     let lowest = num[0];
//     for(let i = 0; i < num.length; i++){
//         if(num[i] < lowest){
//             lowest = num[i];
//         }
//     }
//     return lowest;
// }

// const arrays = [167, 190, 120, 165, 137, 80];
// const minInArray = getLowest(arrays);
// console.log('Lowest Number is: ', minInArray);




// Homework: 1
// write a function that will take 3 numbers will return the max number
// first time do it using if-else

// function getMax(num1, num2, num3){
//     if(num1>num2){
//         if(num1>num3){
//             return num1;
//         } else {
//             return num3; 
//         }
//     }
//      else if (num2>num3){
//         return num2;
//     }
//     else 
//          return num3;
// }

// const result = getMax(50, 20, 70);
// console.log("Max Number is: ", result);


// second time do it using Math.max
// function getMax(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }

// console.log(getMax(2, 0, -1));



// Write a function that will take 3 parameters and will return the min number
// first time do it using if-else

// function getMin(num1, num2, num3){
//     if(num1<num2){
//         if(num1<num3){
//             return num1;
//         } else {
//             return num3; 
//         }
//     }
//      else if (num2<num3){
//         return num2;
//     }
//     else 
//          return num3;
// }

// const result = getMin(20, 50, 10);
// console.log("Min Number is: ", result);


// second time do it using Math.min or Math.max
function getMin(num1, num2, num3){
    return Math.min(num1, num2, num3)
}

console.log(getMin(-2, 1, 3));