/*
Why: JS is single threaded

Examples:
Fetching over network
Heavy calculations
Readin/ Writing to files
Cryptographic functions
Databases

Solutions 1: Callbacks 
-Con: Callback Hell, Pyramid of doom

Solution 2: Promises

Two states: 
- pending
- fulfilled
    - rejected
    - resolved

*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw Error;
            resolve("Yaaay!");
        } catch {
            reject("Naaay!");
        }
    }, 3000);

}).then(succesMessage => console.log("Success message:", succesMessage))
    .catch(errorMessage => console.log("Error message:", errorMessage));

function celebrate() {
   return new Promise((resolve, reject) => {
        resolve("Hurray");
    });
};

console.log(celebrate());
