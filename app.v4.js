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
re = /gr[ae]y/i; // can be one of the characters between the brackets (so a or e in this case), the difference with the ? mark is that when you put in nothing like: const str = 'Gry'; you will get null. While when you use the ? mark you will still get result

re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/; // Match anything except a G or F
re = /^[GF]ray/; // MUST begin with a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // match any digit (between 0 - 9, 10 will give the last number, so 0, to fix this:)
re = /[0-9][0-9]ray/; // for double digit like: str = '10ray';
// String to match:
//const str = '10ray';

//////////////////////////////////////////////////////////////////////////

// Braces {} - Quantifiers 
re = /Hel{2}o/; // Must occur exactly {m} amount of times before the braces, so in this case must be 2x L
re = /Hel{2,4}o/; // Ranges, so in this case we can have 2 to 4x L 
re = /Hel{2,}o/; // Must occur at least {m} times, so in this case must be at least 2x L

// String to match:
// const str = 'Hello';

//////////////////////////////////////////////////////////////////////////

// Paretheses () - Grouping
re = /[0-9]x{3}/; // in this case we are looking for a number between 0 and 9 followed by x and we want that 3 times, in this case it is going to look for a number and then x 3 times, so we have to put it between paretheses like:
re = /([0-9]x){3}/; // this will keep going even if you put in: const str = '3x3x3x4x4x'; so if we only want to look for 3times number x we can use the $ sign like:
re = /^([0-9]x){3}$/;

// String to match:
const str = '3x3x3x3x';

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