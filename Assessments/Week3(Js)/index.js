// alert("yooo")

function foo1() {

    return {bar: "hello"};
    
    }
    
foo1()

    function foo2() {
    
    Return
    
    {bar: "hello"};
    
    }

foo2()


// Return is undefined
// Unreachable code

/*
2.Write a simple function that returns a Boolean indicating whether a string is a palindrome (a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction). Hint: ignore spaces

Example “alula” forwards and backwards is the same.

“race car” forwards and backwards is the same.
*/

let myString ="Race car"

function checkPalindrome(string){
        string = string.replace(/\s/g, "") //remove spaces
        let lowercased = string.toLowerCase();//changing to same letter case (lower case)
        return lowercased === lowercased.split('').reverse().join('');//(reversing and joining)
    }
    
    console.log(checkPalindrome("alulak")); 
    console.log(checkPalindrome("race chajskar")); 
    console.log(checkPalindrome(myString))


/*
3.Using a Prompt allow user to enter numbers separated by commas then print the sum of the numbers.
*/

function addNumbers(){
    let numbers = prompt("Enter numbers to add",00);
    let myArrayOfNums = numbers.split(",")
    myArrayOfNums.map(Number);//converting each number to type of Number.
    
    let sum =myArrayOfNums.reduce((total =0, num) => total + num, 0)
    
    console.log(numbers)
    console.log(sum)

}

// addNumbers()

/*
4. Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

The arguments to the function should be:

a DOM element

a callback function (that takes a DOM element as its argument
    */

function visitAllDescendants(element,callback){
    callback(element)//callback function (that takes a DOM element as its argument

    let children = element.children;

    for(let i =0; i<children.length; i++){
        visitAllDescendants(children[1], callback)// calling the visitallDescendants function with children as the parameter (recursively)
    }

}




