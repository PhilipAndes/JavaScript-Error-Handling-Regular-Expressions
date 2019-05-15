// Lets initialize a variable re for regular expression
let re;
// lets set it to a regular expression literal, we do this by using 2 forward slashes:
re = /hello/;

// this itself is a regular expression, each one of these character between the slashes is a literal character

console.log(re);
// if we use .source, it is going to disregard the slashes and give the actual expression thats inside:
console.log(re.source);

// Lets look at some functions that evaluate expressions

// exec() - Return result in an array if there is a match else it will return null:

const result = re.exec('hello world'); //we put in whatever we want to match it to

console.log(result);

//in this case it will say index 0 because it starts from left to right, as hello is the first world it starts at index 0. If we would have said, re.exec('Philip hello world') it would have started at index 7. The input is the string we are actualy matching. 

//If there is no matching word we get null, so for example: re.exec('hi world') will give null

// And even if you put in: re.exec('helloeieie world') it will give a index of 0, because it can still find the word hello. There are some metacharacters that will make sure it will only look for the word, but we get later into that. 

//////////////////////////////////////////////////////////////////////////

// If you want to do something with certain parts of the result you can do that, for example;
console.log(result[0]); // will output the first result of the array

// or for the index value:
console.log(result.index);

// or for the input value:
console.log(result.input);

//////////////////////////////////////////////////////////////////////////

let re2; 
re2 = /hello/i; //i = case insensitive
re2 = /hello/g; // global search
// test() - returns true or false if there is a match
const result2 = re2.test('Hello');

console.log(result2); 
// re2 = /hello/; will result false because we have an uppercase H. A lowercase will return true 

// to fix this we can make it case insensitive, this is were the i flag comes in, there are several flags a regular expression can use and i is one of them, flags go after the regular expression like: re2 = /hello/i; (a lower case i) 

// Another one is the global search, this is going to look in the entire paragraph for all instances of hello not just the first one. re2 = /hello/g;

//////////////////////////////////////////////////////////////////////////

// match() - Return result array or null (almost the same as exec(). only it works a little bit different), instead of running it of the regular expression, we create a string: const str = 'Hello there'; and match str with re3. 

let re3;
re3 = /hello/i;

const str = 'Hello There';
const result3 = str.match(re3);

console.log(result3);

//////////////////////////////////////////////////////////////////////////

// search() - Return index of the first match if not found it returns -1
let re4;
re4 = /hello/i;

const str2 = 'Hello There';
const result4 = str2.search(re4);

console.log(result4);

//////////////////////////////////////////////////////////////////////////

// replace() - Return a new string with some or all matches of a pattern

let re5;
re5 = /hello/i;

const str3 = 'Hello There';
const newStr = str3.replace(re5, 'Hi');

console.log(newStr);
