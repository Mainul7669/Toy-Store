// 1
//  আমরা জানি, বিষমবাহু ত্রিভুজের ক্ষেত্রফল = √s(s - a)(s - b)(s - c) যেখানে, s = (a + b + c)/2;

// function triangle(a, b, c){
//     let s = (a + b + c)/2;
//     AreaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return AreaOfTriangle;
// }

// const result = triangle(13, 14, 15);
// console.log("Area Of Triangle: " , result);


// 2
// function checkPrime(num){
//     if(num <= 1) {
//         return ("Not Prime Number");
//     } 
//     else if(num == 2){
//         return ("Prime Number");
//     }
//     else {
//      for(let i = 2; i < num; i++) {
//         if (num % i == 0){
//             return ("Not Prime Number");
//         }
//     }
//     return ("Prime Number");
// }
// }

// const result = checkPrime(21);
// console.log(result);


// 3 একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। 

// var i = 7;
// while(i < 19){
//     console.log(i);
//     i = i + 2;
// }



// 4 একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে।

// var array = ['Anis', 'Lima', 'Shilpa', 'rinku', 'Tinku', 'Pinky', 'Tom', 'Jerry'];

// array[4] = "LILI";
// console.log(array[4]);

// array.push("Mainul", "NAym");
// // array.pop();
// array.splice(3, 1, "TAnim"); 
// console.log(array);

// console.log("Total element: ", array.length);



//5 একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক।

// var array = ['Anis', 'Lima', 'Shilpa', 'TAnim', 'LILI',   'Pinky', 'Tom',    'Jerry', 'Mainul', 'NAym'];

// for (var element of array){
//     console.log(element);
// }

// console.log("Total element: ", array.length);



//6 একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে

// var array = [10, 20, 150, 60, 80, 120, 180, 130];

// for(let i =0; i<array.length; i++){
//     if(array[i]>80){
//         console.log(array[i]);
//     }
// }


 
//7  তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে।

// function findProduct(num1, num2, num3) {
//     return num1 * num2 * num3;
//   }
  
//   console.log(findProduct(2, 4, 8));


//8 সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । 

// function feetToInch(feet) {
//     return feet * 12;
//   }

//   console.log(feetToInch(10));


//5 একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

// function centimeterToMeter(cm) {
//     return cm / 100;
//   }

//   console.log(centimeterToMeter(1000))


//6 

// function paperRequirements(firstBook, secondBook, thirdBook) {
//     let totalPages = (firstBook * 100) + (secondBook * 200) + (thirdBook * 300);
//     return totalPages;
//   }

//   console.log(paperRequirements(120, 300, 50));


//7 এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

const arr = [1, 2, -3, 4, 5, -6, 7, 8, -9];
let positiveNums = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positiveNums.push(arr[i]);
  }
}

return positiveNums; // [1, 2, 4, 5, 7, 8]

