/**
 * Copyright (c) 2022 Anthony Mugendi
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const unfreeze = require(".");

// our object
let obj = {
    a: "first val",
    b:2
}
// update value
obj.a = "1st value";
// log
console.log("unfrozen object", obj);

// now freeze object
Object.freeze(obj);
// updating a value should fail
obj.b = "two";
// log
console.log("frozen object", obj);

// now unfreeze object
obj = unfreeze(obj);
// updating a value should fail
obj.b = "two";
// log
console.log("unfrozen object", obj);