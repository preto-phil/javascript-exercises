    //// Method 1

const reverseString1 = function(str) {
   
    // Split string into chars into array
    const splitString = str.split("");
    console.log(splitString);

    // Reverse splitString array into reverseArray
    const reverseArray = splitString.reverse();
    console.log(reverseArray);

    // Join chars to form new string
    const joinArray = reverseArray.join("");
    console.log(joinArray);
    
    return joinArray;
};

//// Shortened Method 1

const reverseString1S = function(str) {
    return str.split("").reverse().join("");
};

//// Method 2

const reverseString2 = function(str) {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
};

// Call functions
reverseString1("Hello");
console.log(reverseString1S("Hello"));
console.log(reverseString2("Hello"));
