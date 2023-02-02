function checkAnagram(string1, string2){
    let isAnagram= "";
    // remove spaces
    string1 = string1.replace(/\s/g, "").toLowerCase();
    string2 = string2.replace(/\s/g, "").toLowerCase();
    // make string2 an array
    let arr1 =string1.split("");
    let arr2 = string2.split("");
    console.log(arr1);
    console.log(arr2);
    // conditionally check if the letters of first string are in the second string.
    let result1 = arr1.map(letter =>string2.includes(letter));
    let result2 = arr2.map(letter => string1.includes(letter));

    console.log(result1);
    console.log(result2);
    // check true in arrays
    let result3 =result1.every((element)=> element === true);
    let result4 = result2.every(element => element === true);
    console.log("res3",result3);
    console.log("res4",result4);
    if(result3 && result4){
        isAnagram = true
    }else{
        isAnagram = false
    }

    return isAnagram


}

console.log(checkAnagram('SPAr',' rasp'));