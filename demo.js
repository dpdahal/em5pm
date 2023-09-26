"use strict";

function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);
  
    // Freeze properties before freezing self
    for (const name of propNames) {
      const value = object[name];
  
      if ((value && typeof value === "object") || typeof value === "function") {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(object);
  }

const users ={
    name:'ram',
    age:20,
    address:{
        city:'pune',
    }
}

// Object.freeze(users);
deepFreeze(users)
// users.name='hari'
users.address.city='pokharas'
console.log(users)
