// var shoppingCart = {
//     books: 3, 
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }

//  when you know the specific property name, use dot notation to get the property value
// var penCount = shoppingCart.pen;
 // alternative System
 // When you know the specific property name, use dot notation to get the property value
// var penCount2 = shoppingCart['pen'];

// var propertyName = 'mouse';

// var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue);

// var properties = Object.keys(shoppingCart);
// var propertyValues = Object.values(shoppingCart);
//  console.log(properties);
//  console.log(propertyValues);
// console.log(shoppingCart);

//  set property values
// shoppingCart.mouse = 15;
// console.log(shoppingCart);
// shoppingCart['mouse'] = 29;
// console.log(shoppingCart);
// shoppingCart[propertyName] = 89;
// console.log(shoppingCart)


// array vs object
// var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
// var friendsAge = [12, 45, 78, 12, 32, 14];
// var friendsAge = {
//     rahim: 12,
//     samad: 45,
//     karim: 78,
//     jamal: 12,
//     robi:32,
//     kazi: 14
// }


// var shoppingCart = {
//     books: 3, 
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25,
//     shoes: 2
// }

// const keys = Object.keys(shoppingCart);
// console.log(keys);

// const values = Object.values(shoppingCart);
// console.log(values);

// // var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
// for(var i = 0; i < keys.length; i++){
//     var propertyName = keys[i];
//     var propertyValue = shoppingCart[propertyName];
//     // console.log(propertyName, propertyValue);
// }

// // for in loop
// for(var propertyName in shoppingCart){
//     const value = shoppingCart[propertyName];
//     console.log(propertyName, value);

// }




// // Calculate the total cost of the products in a shopping cart
// //  [45, 65, 45, 98];

// const shoppingCart = [
//     { name: 'shoe', price: 1200 },
//     { name: 'shirt', price: 2200 },
//     { name: 'pant', price: 3700 },
//     { name: 'belt', price: 600 }
// ];

// function totalCost(products){
//     let sum = 0;
//     for(let i = 0; i< products.length; i++){
//         const product = products[i];
//         sum = sum + product.price;
//         // console.log(product);
//     }
//     return sum;
// }

// const expense = totalCost(shoppingCart);
// console.log('Total expense today:', expense);




// Quantity Calculate

// const shoppingCart = [
//     { name: 'shoe', price: 1200, quantity: 2 },
//     { name: 'shirt', price: 2200, quantity: 5 },
//     { name: 'pant', price: 3700, quantity: 4 },
//     { name: 'belt', price: 600, quantity: 3 },
// ];

// function totalCost(products){
//     let sum = 0;
//     for(let i = 0; i< products.length; i++){
//         const product = products[i];
//         const productTotal = product.price * product.quantity;
//         sum = sum + productTotal;
//         // console.log(product);
//     }
//     return sum;
// }

// const expense = totalCost(shoppingCart);
// console.log('Total expense today:', expense);




//Find the cheapest phone from an array of phone objects
// [45, 21, 6, 98, 56];

// const phones = [
//     { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
//     { name: 'iphone', camera: 7, storage: '32gb', price: 82000, color: 'silver' },
//     { name: 'Xaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver' },
//     { name: 'Oppo', camera: 25, storage: '32gb', price: 20000, color: 'black' },
//     { name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'golden' },
//     { name: 'HTC', camera: 10, storage: '32gb', price: 18000, color: 'silver' },
// ];

// function cheapestPhone(phones){
//     let cheapest = phones[0];
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < cheapest.price){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection);




// Find the matched product
const products = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 7, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 25, storage: '32gb', price: 20000, color: 'black' },
    { name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'golden' },
    { name: 'HTC', camera: 10, storage: '32gb', price: 18000, color: 'silver' },
];

function matchedProducts(products, search){
    const matched = [];
  for(const product of products){
    if(product.color.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, 'Golden');
console.log(result);
