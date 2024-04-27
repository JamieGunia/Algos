// 1. Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, 
// but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"


function removeBlanks(string){
    let nonblank="";
    for (let i=0; i < string.length; i++)
        if (string [i] != " "){
            nonblank = nonblank + string[i];
        }
        return nonblank;
}
console.log (removeBlanks(" Pl ayTha tF u nkyM usi c ")); 
console.log (removeBlanks("I can not BELIEVE it's not BUTTER")); 


// 2. Get Digits

// Create a JavaScript function that given a string, 
// returns the integer made from the string’s digits. 
// You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(string){
    let digits = " ";
    for (let i=0; i < string.length; i++){
        if (!isNaN(string[i])){
            digits = digits + string[i]
        }
    }
    return Number(digits);
}

console.log(getDigits("abc8c0d1ngd0j0!8")); 
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));



// 3. Acronyms

// Create a function that, given a string, 
// returns the string’s acronym (first letter of the word capitalized). 
// You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym (string){
    let word = string.split(" ");
    console.log (word);
    let acronym = "";

    for (let i=0; i <word.length; i++){
        let statement = word[i];

        if (statement !== ""){
            acronym = acronym + statement[0].toUpperCase();
        }

    }
    return acronym;
}

console.log (acronym(" there's no free lunch - gotta pay yer way. "));
console.log (acronym("Live from New York, it's Saturday Night!"));




// 4. Count Non-Spaces

// Create a function that, given a string, 
// returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11


function countNonSpaces(string){
    let count =0;

    for (i=0; i < string.length; i ++){
        if (string[i] !== " "){
            count++;
        }
    }
    return count;
}

console.log (countNonSpaces("Honey pie, you are driving me crazy")); 
console.log (countNonSpaces("Hello world !")); 



// 5. Remove Shorter Strings

// Create a function that, given an array of strings and a numerical value, 
// returns an array that only contains strings longer than or equal 
// to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']


function removeShorterStrings(array, value){
    let result = [];

    for (let i=0; i < array.length; i++){
        if (array[i].length >= value){
            result.push(array[i]);
        }
    }
    return result;
}

console.log (removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log (removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)); 