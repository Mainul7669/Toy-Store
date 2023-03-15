// function summary
// function functionName (parameters){
   //function body
    //return
// }

// var returnValue = functionName(parameters value)


//1
// function bringSingara(money){
//     var singaraPrice = 10;
//     var quantity = money / singaraPrice;
//     return quantity;
// }

// var myTaka = 150;
// var singaras = bringSingara(myTaka);
// console.log('Eating singaras: ', singaras);

//2
// function getAverage (assignment1, assignment2, assignment3){
//     const total = assignment1 + assignment2 + assignment3;
//     const average = total / 3;
//     return average;
// }

// const assignment1Marks = 60;
// const assignment2Marks = 58;
// const assignment3Marks = 59;
// var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
// console.log ('my average so far: ', myAverage);



// add(125, 96);

// function sum(a, b, c, d, e){
//     console.log(a, b, c, d, e);
//     var sum = a + b + c + d + e;
//     console.log(sum);
// }

// sum(15, 98, 56, 5, 9);


//একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

//Solution_1
// function multiple(n) {
//     for (var i=1; i<=10; i++)
//     console.log(n + " * " + i + " = " + n*i);
// }

// multiple(13);

//২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

// function paragraph(string) {
//     var result = string.toLowerCase();
//     console.log(result);
// }

// paragraph("AMI JABO NA SHASHUR BARI. KARON AJKE AMAR MON VALO NAI");



//৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

// function fullName(firstName, lastName) {
//     return firstName + ' ' + lastName;
// }
// console.log(fullName("hablu", "kanto"));


//৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

//Solution_1
// function square(num) {
//     var result = num * num;
//     return result;
// }
// console.log(square(5));

//Solution_2nd

// function square(num) {
//     var result = num * num;
//     console.log(result);
// }

// square(5);


//৫.pizza নামের একটা object কে define করবা এবং pepperoni প্রিন্ট করবা। :

// const pizza = {
//     toppings: ['cheese', 'sauce', 'pepperoni'],
//     crust :'deep dish',
//     serves: 2
// }

// console.log(pizza.toppings[2]);


// write a JS function called foo() which prints "foo" and a function called bar() which prints"bar". Call function bar() in the foo() function after printing. Now call the foo() function.

// function foo() {
//     console.log("foo");
//     bar();
//   }
  
//   function bar() {
//     console.log("bar");
//   }
  
//   foo();


//write a JS function called make_avg() which will take three integers and return the average of those values.


// function make_avg(num1, num2, num3) {
//     const average = (num1 + num2 + num3) / 3;
//     return average;
//   }

//   console.log(make_avg(60, 54, 44).toFixed(2));



//write a JS function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


// function make_avg(array) {
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum / array.length;
//   }

//   var array = [1,2,3,4,5];
// console.log(make_avg(array));


// write a JS function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways: 1) Has return + Has parameter 2) No return + Has parameter 3) Has return + No parameter 4) No return + No parameter

// 1) Has return + Has parameter
// function odd_even(num) {
//     if (num % 2 === 0) {
//       return 'Even';
//     } else {
//       return 'Odd';
//     }
//   }

// console.log(odd_even(46));

  
// 2) No return + Has parameter
//   function odd_even(num) {
//     if (num % 2 === 0) {
//       console.log('Even');
//     } else {
//       console.log('Odd');
//     }
//   }
  
//   odd_even(44);


// 3) Has return + No parameter

// const prompt=require("prompt-sync")({sigint:true}); 
// function odd_even() {
//    num = prompt('Please enter a number: ');
//     if (num % 2 === 0) {
//       return 'Even';
//     } else {
//       return 'Odd';
//     }
//   }

//   console.log(odd_even());

  

// 4) No return + No parameter
// const prompt=require("prompt-sync")({sigint:true}); 
// function odd_even() {
//    num = prompt('Please enter a number');
//     if (num % 2 === 0) {
//       console.log('Even');
//     } else {
//       console.log('Odd');
//     }
//   }

//   odd_even();



// 5) The traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger. If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable.

// const prompt=require("prompt-sync")({sigint:true}); 
// var signal = prompt("Enter the color of the signal: ");

// switch(signal) {
//     case 'green':
//     console.log("Cross the road");
//     break;
//      case "yellow":
//              console.log("Stop");
//                break;
//                case "red":
//                 console.log("Don't cross the road");
//                    break;
                   
//                    default:
//                     console.log("Invalid input");
//                      break;
//       }



// Solution-2


// function signalCheck(signal) {
//     if (signal === "green") {
//       console.log("You can go ahead and cross the road");
//     } else if (signal === "yellow") {
//       console.log("You should stop and wait for the signal to turn green.");
//     } else if (signal === "red") {
//       console.log("You must not cross the road until the signal turns green.");
//     } else {
//       console.log("Invalid signal!");
//     }
//   }

//   signalCheck("red");



// Check whether a year is a Leap Year or not (simplified way)

// function isLeapYear (year) {
//   const remainder = year % 4;
//   if(remainder === 0) {
//     console.log('Leap Year!!!', year);
//   }
//   else {
//     console.log('Not a leap year', year);
//   }
// }

// isLeapYear(2021);
// isLeapYear(2004);
// isLeapYear(2024);

//Solution_2
// function isLeapYear (year) {
//     const remainder = year % 4;
//     if(remainder === 0) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }

//   console.log('my year:', isLeapYear(2024));
//   console.log('her year:', isLeapYear(2021));



// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

// function convertMinute(hour) {
//     const result = hour * 60;
//     return result;
//   }

//   console.log(convertMinute(2));



// Reverse a string
// function reverseString(text){
//   // for(let i = 0; i < text.length ; i++){}
//     let reversed = '';
//     for(let i = text.length-1; i >= 0; i--){
//         const element = text[i];
//         reversed = reversed + element;
//         console.log(element, reversed);
//     }
//     return reversed;
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log('reversed output: ', reversed)



// Reverse Word
// function reverseWords(str){
//     const words = str.split(' ');
//     const reversed = [];
//     for(let i = words.length - 1; i >= 0; i--){
//         const element = words[i];
//         reversed.push(element);
//     }
//     const result = reversed.join(' '); 
//     return result;
// }

// const str = 'I am a good boy';
// const result = reverseWords(str);
// console.log('reversed output: ', result);



// Number sorting
// var numbers = [20, 5, 25, 45, 1];
// numbers.sort(function (a,b){
//     return a -b;
// });

// console.log(numbers);


// For reverse sorting
var string = [20, 5, 25, 45, 1];
string.sort(function (a,b){
    return b - a;
});

console.log(string);
