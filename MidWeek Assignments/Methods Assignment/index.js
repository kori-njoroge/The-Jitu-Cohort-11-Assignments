// alert("yoo")
// 1. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

let myArray = ["Apple", "Banana", "apple", "orange", "Banana"];

function removeDuplicates(arr) {

    let uniqueArray = {};

    for (let i = 0; i < arr.length; i++) {
        let upperCaseValue = arr[i].toUpperCase();
        uniqueArray[upperCaseValue] = arr[i];
    }

    let result = Object.values(uniqueArray);

    return result;
}

let unique = removeDuplicates(myArray);
console.log(unique); // Output: ["Apple", "Banana", "orange"]

/*
2.Write a JavaScript function to find an array contains a specific element. Examplearr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True]

*/
let arr = [2, 5, 9, 6];
// answer 1
function containsElement(arr, element) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
// call the function
console.log(containsElement(arr, 1))



// answer.2
console.log(arr.includes(5)); 



/*
3. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
Example: [3, 8, 23, "hello", " ", false, "45"]result: [3, 8, 23, "hello", "45"]

*/

let myArray2 = [3, 8, 23, "hello", " ", false, "45"];

function cleanArray(arr) {
    return arr.filter(function(item) {
        if(item !==  " "){
            return !!item; // will return all true elements
        }
    });
}


let cleanArr = cleanArray(myArray2);
console.log(cleanArr); 
// Output: [3, 8, 23, "hello", "45"]




/*
4.Write a function to reverse the words a string.example: "Hello world"result: "world hello"

*/

let mystring= "Hello World"
function reverseSring(str) {
    let words = str.split(" ");  //separate the words
    words.reverse(); //reverse order of  words
    return words.join(" "); //join the reversed words
}

console.log(reverseSring(mystring))

