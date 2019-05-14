// A try block lets us write some bit of code and test for errors, the catch block lets us handle these errors if there are any, we can also throw our own errors

try {
    // Produce a ReferenceError:
    // myFunction();

    // Produce a typeError:
    // null.myFunction();

    // Produce SyntaxError (we use the eval function this will evaluate javascript within a string), 
    //eval('Hello world'); 
    // this will throw an error because it will eval it as a variable and not as a string (add double quotes to eval it as a string)

    // Produce URIError:
    //decodeURIComponent('%');

} catch(e) { // this will take in an error object like, err/e/error
    console.log(e);
    // if you dont want the ReferenceError you can do:
    console.log(e.message);
    // Or if you want the type of error you can do:
    console.log(e.name);
    // You can also test to see what kind of error it is:
    console.log(e instanceof ReferenceError);
    // Or to see the type of error:
    console.log(e instanceof TypeError);
    // You can format the error as you want
    console.log('There is no myFunction!');
    console.log('Its null stupid!!');
    // Or something like: 
    console.log(`There is no ${e.name}!`);
    console.log(`${e.name}: Its null stupid!!!`);
} finally { // finally makes sure it runs no matter what
    console.log('Finally runs regardless of result...');
}

console.log('Program continues...');

// As you can see the scripts continues even when we get an error. If we put the function just there without the try & catch the script will just throw an error for the function!

// You can also throw your own error, lets say:
const user = {email: 'jdoe@gmail.com'};

//let say we want to check if this user has a name:
try {
    // if user has no name
    if(!user.name) {
        // then throw error
        // throw 'User has no name';

        // You can even throw it as a syntax error:
        throw new SyntaxError('User has no name');
    }

} catch(e) { // this will take in an error object like, err/e/error
    console.log(e);
    // or something like:
    console.log(`User Error: ${e.message}`);
} finally { // finally makes sure it runs no matter what
    console.log('Finally runs regardless of result...');
}

console.log('Program continues...');


