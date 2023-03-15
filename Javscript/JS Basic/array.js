const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

// ---------------------
console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.indexOf(252) !== -1 ){

}

// concat : 
const newFriendsAge = [12, 13, 11, 13]
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends)


// Using Slice
const buddies = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = buddies.slice(2, 5); // 2 teke 5 er agh porjonto nibo
console.log(partial);
console.log(buddies);


//Using splice
const bros = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// Removes elements from an array 
// and, if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the original array
const newBros = bros.splice(2, 5, 99, 555, 7777);
console.log(newBros);
console.log(bros);



//Remove duplicate items from an array
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul',
 'babul', 'abul', 'kabul', 'gabul', "cabul", 'babul', 'abul', 'abul'];

function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i< names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
} 

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);




