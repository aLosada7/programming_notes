# Javascript

[ES6 syntax and high-level functions](Javascript%20fac071cb301d4949b100acdc3b789892/ES6%20syntax%20and%20high-level%20functions%20ead05f3315d84d37a6f5cda8702eb4ab.md)

[Helper functions](Javascript%20fac071cb301d4949b100acdc3b789892/Helper%20functions%2084fcd0463a95446a8e55d5916b8adec6.md)

Optimize your application → [https://medium.com/@bretcameron/13-tips-to-write-faster-better-optimized-javascript-dc1f9ab063d8](https://medium.com/@bretcameron/13-tips-to-write-faster-better-optimized-javascript-dc1f9ab063d8)

## **Concepts**

JavaScript is a multi-paradigm programming language. It has both object-oriented and functional features

**DRY** - Don't Repeat Yourself Principle

**Abstraction** - Each piece of functionality should be implemented in just one place

**Guard clauses** - Check if not null (pro) 

## Functional programming

Functional programming (FP) is a programming paradigm which aims to build software by composing pure functions, avoiding shared state, mutable data and side-effects.

> Let's not modify (global) variables, let's create new ones

Avoid using loops, simplify your code using map(), reduce(), filter() or forEach()

## Clasical (class) vs prototypal inheritance

In **Classical inheritance**, we can only refer to Objects through Classes (new)

A normal function call, using the *new* keyword *vs.* a constructor function call

With **protypal inheritance**, objects can be created from thin air, or they can be created from other objects (satisfying LSP) (apply). It bridges object-oriented and functional features

Using protypal inheritance it's possible to implement *new* as a function

In protypal inheritance you only have objects. You can create or clone them. If you create a child, this isn't a copy of the parent. Instead, it is a new object which have a reference to the parent prototype

## Composition over inheritance

Interface Segregation Principle - A class should not depend on methods or properties that don't need 

Example: Mustang vs. Elon Musk's Tesla (introduces ludicrousSpeed or *autopilot* methods)

## **Javascript Common Questions**

**1. What is prototypical inheritance and how useful is it?**

Prototypical inheritance helps us to build a new object on top of another.

let animal = {

eats: true

};

let rabbit = {

jumps: true

};

rabbit.__proto__ = animal; // (*) proto is a getter/setter

// we can find both properties in rabbit now:

alert( rabbit.eats ); // true (**)

alert( rabbit.jumps ); // true

[https://javascript.info/prototype-inheritance](https://javascript.info/prototype-inheritance) (more examples and explanation)

**2. How can JavaScript be used to improve accessibility on the web?**

What we need to do is to evaluate each page. The aspects where we can find more accessibility problems are:

- Navigation
- User control
- Confusion/Disorientation

Some best practices are:

- Do not rely on Javascript too much (css, html and everything you can see in the DOM generated with Javascript)
- Provide client-side validation, alerting to the user if problems exists quickly, without sending the data to the server
- Use HTML tags that helps the user, as label (when there’s an input)
- Validate only when the form is sent (if possible)
- Place an error alert

[https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript)

**3. What is event bubbling and how is it different to event capturing?**

When there are several elements handling events, the first one, called target element, is going to be executed first, and then its parent, following these all they way up to other ancestors (events). It is also possible to stop the propagation of an event.

Capturing phase happens looking for the target, at the beginning. This makes it unusual, because we don’t even have the target element when this phase ocurrs.

What’s the difference?

Using elem.addEventListener(..., {capture: true}) makes that the handler will first pass the capturing first (HTML → BODY → FORM → DIV), then find the target, and then bubbling phase (back to the ancestors).

- currentTarget -> element where is the handler /// target -> element where the event was initialized

https://javascript.info/bubbling-and-capturing

**4. How does event delegation improve code on sites with lots of interactive elements?**

If we have a huge number of interactive elements, it’s going to take less time (improving performance) to have a single handler that analyses the target and handles de event.

This also gives us control over the DOM, and possible modifications, using less code.

https://javascript.info/event-delegation

**5. What are closures and how can they be useful in organizing code?**

A closure is the combination of a function and the lexical environment (scope) within which that function was declared. Closures can also be used to encapsulate private data/methods. Closure also gives you access to an outer function’s scope using the inner function.

SCOPE/STATE + INNER FUNCTION(S). We can return an inner function or an object containing inner functions

const bankAccount = (initialBalance) => {

const balance = initialBalance;

return {

getBalance: function() {

return balance;

},

deposit: function(amount) {

balance += amount;

return balance;

},

};

};

- -

const getSecret = (secret) => {

return {

get: () => secret

};

};

test('Closure for object privacy.', assert => {

const msg = '.get() should have access to the closure.';

const expected = 1;

const obj = getSecret(1);

const actual = obj.get();

});

https://www.freecodecamp.org/news/closures-in-javascript-explained-with-examples/

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

**6. What does 'use strict' mean at the top of a block of code?**

Strict context on a top of a block you prevents certain actions from being taken also throwing more exceptions. This can be necessary in some situations because Javascript is a loosely typed language. This prevents global variables undeclared, ….

**7. What does the term 'hoisting' mean in reference to JavaScript?**

Basically, that you can move declarations to the top of the current scope. This is possible because code is parsed before been executed. Parse means that functions and variables hold in memory before executing the code.

**8. What is the difference between an arrow function and a regular function?**

Syntax difference is already known.  In arrow function, there is not argument binding, this value remains the same throughout the lifecycle of the function. Arrow functions are callable with **new** keyword. You cannot duplicate arguments in arrow functions.

Using new keyword

Regular functions created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword.

However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.

let add = (x, y) => console.log(x + y);

new add(2,3);

—

You cannot duplicate argument names using arrow functions.

(x, x) => {}

// SyntaxError: duplicate argument names not allowed in this context

It is not possible either to have duplicated named parameters using string mode, even using regular functions.

**9. Where should you use the 'let' and 'const' keywords instead of 'var'?**

**Const** means that the identifier won’t be reassigned in the future. **Let** means that the variable may be reassigned, and **var** is the weakest signal available, but this one can be or not be reassigned during execution flow.

https://medium.com/@pandeysoni/when-should-use-const-and-let-instead-of-var-in-javascript-ec2c3d7e5ca6

**10. What is functional programming and how is it different?**

Functional programming (FP) is a programming paradigm which aims to build software by composing pure functions, avoiding shared state, mutable data and side-effects.

**11. How can you use JS to improve the performance of the website?**

There are so much ways to improve the performance of the website using Javascript. Let’s see some of them:

- Remove unused code and excluded libraries
- Reduce DOM iteration to a minimum. DOM changes cause worst performance.
- Not load what you don’t need at the beginning (lazy loading)
- Optimize loading order***
- Optimize code
- Use CSS3 effects instead of Javascript ones, if possible
- Use cache

**12. How can you future-proof your JavaScript code?**

Use strict mode, prettier, objects as payloads for functions

**13. Pure vs. Impure Functions**

Pure functions are those who doesn’t produce side effects (always that you give an input, you will get the same output)

**14. DOM Definition**

The DOM [(Dynamic Object Model)](https://en.wikipedia.org/wiki/Document_Object_Model) is an interface that represents the structure of a web document.

**15. How to optimise loading order**

CSS styles need to be loaded before JS ones.

**16. this keyword**

The JavaScript this keyword refers to the object it belongs to. When it’s inside a method, this keyword refers to it’s owner. When used alone, it refers to the global object