<!--
 Copyright (c) 2022 Anthony Mugendi
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Unfreeze

This module simply recursively unfreezes an object that has been frozen using `Object.freeze()`.

# But Why?

I wrote it at a time when I wanted to use S3 config values with [aws-sdk](https://www.npmjs.com/package/aws-sdk) module. 

I was using the amazing [config](https://www.npmjs.com/package/config) module to manage my configs. If you have used **config** you would know that it freezes the config object and **aws-sdk** throws an error when options are frozen.

I think there are other use cases out there so I will leave this here for your benefit 🌟 !

# How to use

```javascript
const unfreeze = require("unfreeze");

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

```

This logs:

```
unfrozen object { a: '1st value', b: 2 }
frozen object { a: '1st value', b: 2 }
unfrozen object { a: '1st value', b: 'two' }
```

Note: This example uses a simple object. But unfreeze works well even with deeply nested objects!

Enjoy!