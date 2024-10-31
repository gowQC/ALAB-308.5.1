// ===PART 1===
console.log("========PART 1========");

// part 1 variables
const numArray = [1,2,4,6];
const strArray = ["hello", "purple", "cat", "woof", "morning"];
let n = 8;

// Take an array of numbers and return the sum.
function returnSum (arr) {
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log("Bullet 1: " + returnSum(numArray));

// Take an array of numbers and return the average.
function returnAverage (arr) {
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log("Bullet 2: " + returnAverage(numArray));

// Take an array of strings and return the longest string.
function returnLongest (arr) {
    let longest = "";
    for(i=0;i<arr.length;i++){
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
console.log("Bullet 3: " + returnLongest(strArray));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function returnStringArray (arr, num) {
    let array = [];
    for(i=0;i<arr.length;i++){
        if (arr[i].length > num) {
            array.push(arr[i]);
        }
    }
    return array;
}
console.log("Bullet 4: " + returnStringArray(strArray,4));

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

/** count from 1 to 8, given 8
 * 8-7 = 1
 * 8-6 = 2
 * ...
 * 8-1 = 7
 * 8-0 = 8
 */
function count (x, y) {
    console.log(x-(y-1));
    if(y>1) {
        count(x, y-1);
    }
}
console.log("Bullet 5: ");
count(n, n);

// PART 2
console.log("========PART 2========");

// part 2 variables
const givenArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

// Sort the array by age.
function sortByAge (arr) {
    let ageArray = [];
    let finalArray = [];
    
    // fill empty array with ages
    for(i=0;i<arr.length;i++){
        ageArray.push(arr[i].age);
    }

    // sort array of ages
    ageArray.sort((a, b) => a - b);

    // find object based on age and then add it to array
    for(i=0;i<arr.length;i++){
        for(n=0;n<arr.length;n++){
            if (ageArray[i] === arr[n].age) {
                finalArray.push(arr[n]);
            }
        }
    }
    return finalArray;
}
console.log("Bullet 1: ");
console.log(sortByAge(givenArray));

// Filter the array to remove entries with an age greater than 50.
function removeFifty (arr) {
    // call our sorting function and assign it to a variable
    let sorted = sortByAge(arr);

    // iterate through array starting at the beginning
    for(i=sorted.length-1;i>=0;i--){
        if (sorted[i].age > 50) {
            sorted.pop(); // pop each obj with age > 50
        }
    }
    return sorted;
}
console.log("Bullet 2: ");
console.log(removeFifty(givenArray));

// Map the array to change the “occupation” key to “job” and increment every age by 1.
function changeDetails (obj) {
    // transfer old key value to new key
    obj.job = obj.occupation;

    // transfer age incremented +1
    let age = parseInt(obj.age) + 1;

    // delete both old key and age key
    delete obj.occupation;
    delete obj.age; // we delete age so it will continue following the previous key-value pair order

    // reassign new age value as string
    obj.age = age.toString();

    return obj;
}
console.log("Bullet 3: ");
console.log(givenArray.map(changeDetails)); // map iterates through each item in the array (each thing in the array is an object)

// Use the reduce method to calculate the sum of the ages.
console.log("Bullet 4: ")
console.log(givenArray.reduce((previous, current)=> {
    let x = 0;
    if (typeof previous === "object") {
        x = parseInt(previous.age)
    }
    else {
        x = previous;
    }
    let y = parseInt(current.age);
    return x + y;
}, 0));

// PART 3
console.log("========PART 3========");

// Take an object and increment its age field.
// If the object does not yet contain an age field, create one and set it to 0.
// Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
function takeObj (obj) {
    if (!("age" in obj)) { // if no "age" key, then execute code
        obj.age = '0';
    }
    else {
        // get obj age, turn into number, then add 1, then reassign age as string value
        obj.age = (parseInt(obj.age)+1).toString();
    }
    obj.updated_at = new Date(); // regardless of conditions, updated_at is initialized and/or assigned value of Date object
}
console.log("Bullet 1: ");
// proof the actual object was modified
console.log("Unmodified object: ");
console.log(givenArray[1]); // before being modified
takeObj(givenArray[1]);
console.log("Modified object: ");
console.log(givenArray[1]); // after being modified

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
// If the object does not yet contain an age field, create one and set it to 0.
// Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
function makeCopy (obj, passedFunc) {
    let copy = {...obj}; // ... is the spread operator, which spreads the values of obj into copy >> makes this operation pass by value, no longer reference
    passedFunc(copy);
    return copy;
}
console.log("Bullet 2: ");
console.log("Function executes and creates copy: ");
console.log(makeCopy(givenArray[2], takeObj));
console.log("Original object remains unmodified: ")
console.log(givenArray[2]);