// Problem 1: Let’s play a mind game
// Description:- The mindGame() function takes a positive number as input and performs a mathematical operations on it. First, it multiplies the number by 3, then adds 10, then divides by 2, then subtracts 5. The final result is the output of the function. If the input is not a number, it will tell the user to enter a number instead.
function mindGame(number){
    let typeOfParam = typeof(number);
    if(typeOfParam === 'number'){
        return (number*3 + 10) / 2 - 5;
    }
    return "please enter a number!!";
    
}




//Problem 2: Finding even or odd
// Description:-  This function takes a string as a parameter and checks to see if the length of the string is even or odd. It then returns a string of 'even' or 'odd' depending on the result.  If the input is not a string, it will tell the user to enter a string instead.

function evenOdd(string) {
    if (typeof string !== 'string') {
      return 'please enter a string!!';
    }
    if (string.length % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }





//Problem 3: Is Less or Greater than seven
// Description:- This function takes in a number as a parameter and subtracts the number by 7. Then it checks if it is greater than or less than 7. If it is less than 7, it returns the difference between the number and 7. If it is greater than 7, it returns the double of the number. If the parameter is not a number, it returns a statement saying "please enter a number!!".

function isLGSeven(number) {
    let typeOfParam = typeof(number);
    if(typeOfParam === 'number'){
    let sub = (number - 7);
    if (sub < 7) {
      return sub;
    } else {
      return number * 2;
    }
  }
  return "please enter a number!!";
}




// Problem 4: Finding Bad data
// Description:- This function finds how many negative numbers are in an array. It first checks to make sure the argument passed is an array, if it is not, it returns a string which lets the user know. If it is an array, it will loop through the array, and count how many negative numbers are found. Finally, the total number of negative numbers found will be returned. 

function  findingBadData(array) {
    let isArray = Array.isArray(array);
    if(isArray == false){
        return "please enter an array!"
    }
    let Bad_data = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        Bad_data++;
      }
    }
    return Bad_data;
  }





// Problem 5: Convert your gems into diamond
//Description:- This function takes three arguments, each of which should be a number, and calculates the total number of diamonds that can be obtained from the given number of gems. The function first multiplies each argument by its respective conversion rate (21, 32, and 43) in order to calculate the total number of diamonds. If the total number is greater than or equal to 2000, it subtracts 2000 from the total number and returns the result; otherwise, it returns the total number. If the arguments are not of type number or the wrong number of arguments is passed, the function returns 'invalid!'.

function gemsToDiamond(gems1, gems2, gems3) {
    if(typeof(gems1) === 'number' && typeof(gems2) === 'number' && typeof(gems3) === 'number'  && arguments.length == 3) {
        let totalDiamond = (gems1 * 21) + (gems2 * 32) + (gems3 * 43);
        if(totalDiamond<1000*2){
        return totalDiamond;
        }
         else {
            let remainingDiamond = totalDiamond - 2000;
            return remainingDiamond;
    }
  }
  return 'invalid!';
}
  
