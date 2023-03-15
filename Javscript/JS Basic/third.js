//29==>
// for (var i=58; i<=98; i++)
// {
//     console.log(i);
// }

//30==>
// var i=412;
// while(i<=456) {
//     console.log("Even number:" +i);
//     i=i+2;
// }

//31==>
// var i=581;
// while(i<=623) {
//     console.log("Odd number:" +i);
//     i=i+2;
// }



/* 
1. show output from: 1-50
2. if the number is divisible by 3 then instead of the number, show 'foo'
3. if the number is divisible by 5 then instead of the number, show 'bar'
4. if the number is divisible by both 3 and 5 then instead of the number show 'foobar'
*/
for(let i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if (i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}




/* 
fixed: per item wood requirements 
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(1, 1, 1);
console.log('total wood required: ', totalWood);





//(advanced) Multi-layer discount price calculation
/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100 ){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}


const price = ticketPrice(120);
console.log('price: ', price);



// Validation JS
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(12, 45);
// console.log(result);

function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
}

const output = multiply(12,45);
console.log(output)