const reverseString = function(str) {
   
    //// Method 1

    // Split string into chars into array
    const splitString = str.split("");
    console.log(splitString);

    // Reverse splitString array into reverseArray
    const reverseArray = splitString.reverse();
    console.log(reverseArray);

    // Join chars to form new string
    const joinArray = reverseArray.join("");
    console.log(joinArray)
    
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
