let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols:
re = /^h/i; // Must start with
// now it will show because str starts with a H, if we would put in; const str = 'Philip Hello World'; we get null and does NOT match

re = /d$/i; // Must ends with
// Doenst have to be 1 character, you can also do: re = /World$/i;

re = /^hello$/i; // Begins with and ends with

re = /h.llo/i; // the DOT Matches any ONE character

re = /h*llo/i; // the * Matches any character 0 or more times, so for example if we would had: const str = 'Heeeello'; it would work, or: const str = 'hllo';

// Lets take a look at the ?, in some cases for example gray, is spelled as grey, so we want it to be optional, so we can use the ? mark after the character thats optional:
re = /gre?a?y/i; // Optional character
// So const str = 'gray'; or const str = 'grey'; will both work, even: const str = 'gry'; will work becaue they are both optional
// String to match:
//const str = 'Gray';

re = /gre?a?y\?/i; // Escape character, so for example what if we want So const str = 'gray?'; and the question mark to be used as an actual literal, we can say: re = /gre?a?y\?/i;
// String to match:
//const str = 'Gray?';


// String to match:
const str = 'Hello';

// Log results
const result = re.exec(str);
console.log(result);

// Lets write a function for testing:
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`); //source will keep out the slashes
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);