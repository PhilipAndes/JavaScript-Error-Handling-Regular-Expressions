// See last lesson files for more information!
let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols:
re = /^h/i; // Must start with
re = /d$/i; // Must ends with
re = /^hello$/i; // Begins with and ends with
re = /h.llo/i; // the DOT Matches any ONE character
re = /h*llo/i; // the * Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character
// String to match:
//const str = 'Gray?';

//////////////////////////////////////////////////////////////////////////

// Brackets [] - Character Sets
re = /gr[ae]y/i; 

re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/; // Match anything except a G or F
re = /^[GF]ray/; // MUST begin with a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit
re = /[0-9][0-9]ray/; // Match any digit
// String to match:
//const str = '10ray';

//////////////////////////////////////////////////////////////////////////

// Braces {} - Quantifiers 
re = /Hel{2}o/; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/; // Ranges between
re = /Hel{2,}o/; // Must occur at least {m} times

// String to match:
// const str = 'Hello';

//////////////////////////////////////////////////////////////////////////

// Paretheses () - Grouping
re = /[0-9]x{3}/; 
re = /([0-9]x){3}/; 
re = /^([0-9]x){3}$/;

// String to match:
// const str = '3x3x3x';

//////////////////////////////////////////////////////////////////////////

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric (any letter / number) or it can be a underscore _ (so in the const str = '3x3x3x'; it will return the first character which is 3)
re = /\w+/; // The + will look at ALL the word characters (symbols like : ; () {} [a space] wont work, the only thing that will work is the underscore _)
re = /\W/; // NON-Word character (uppercase) so all numbers, letters and underscore _ will not match
re = /\d/; // Match any digit
re = /\d+/; // Match any digits 0 or more times
re = /\D/; // Match any NON-digits
re = /\s/; // Match whitespace character (so const str = ' '; a space or tab will be a match)
re = /\S/; // Match NON-whitespace character


// Word boundary:
re = /Hell/i; // in the case of: const str = 'Hello, welcome to Hell'; it will match the with index: 0 , because it will match the Hell from Hello

re = /Hell\b/i; // in this case it will only look for the word Hell

// String to match:
//const str = 'Hello, welcome to Hell';

//////////////////////////////////////////////////////////////////////////

// Assertions (are kinda like conditionals)
re =/x(?=y)/; // Match x only if followed by y, so for example: const str = 'x'; wont work, but: const str = 'xy'; will work, or also: const str = 'eerreeexyeeeerrree'; will work, as long x if followed up by y

re =/x(?!y)/; // Match x only if NOT followed by y,

// String to match:
const str = 'xx';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);