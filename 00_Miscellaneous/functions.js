console.log(random(1,10));

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomAnonymisFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomAnonymisFunction(1,10));


function genericActionPerformer(genericAction, genericName) {
    // do stuff...

    return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting.`;
console.log(genericActionPerformer(subtract, "Tobias"));

const walk = (name) => `${name} is walking`;
console.log(genericActionPerformer(walk, "Nicolas"));



console.log(genericActionPerformer((name) => `${name} is reading.`, "Andrea"));