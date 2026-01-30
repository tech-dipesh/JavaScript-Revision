# In the interview we must write a code on:modular, reusable and functionwal way code, that's the perfect way to write it.


# Remaining topic to study:
JavaScript Functional Programming

Memory Management and Optimization: Understanding garbage collection in JavaScript, and utilizing tools like WeakMap and WeakSet for more efficient memory usage.



9. Memory Management & Garbage Collection

Learn:

Reference vs primitive

Memory leaks

Closures holding memory

Example: Forgetting to close background apps → RAM full.


. Deep vs Shallow Copy

Know:

Object.assign

Spread operator

structuredClone

JSON trick limitations

Why important:
Avoid bugs when changing one object affects another.



6. Prototype & Prototype Chain

Example:
Inheritance like:
Child got habits from parents, parents from grandparents.

Understand:

__proto__

prototype

How JS searches properties

This is core for:

Classes

Inheritance

Memory efficiency






Promise chaining

Promise.all

Promise.race

Promise.any



this Keyword (Most confusing concept)

Real-life analogy:
"This" is who is calling me, not where I am written.

Rules:

Normal function → depends on caller

Arrow function → borrows from parent

Object method → refers to object

call, apply, bind → manually set this

new → refers to new object






this Keyword (Most confusing concept)

Real-life analogy:
"This" is who is calling me, not where I am written.

Rules:

Normal function → depends on caller

Arrow function → borrows from parent

Object method → refers to object

call, apply, bind → manually set this

new → refers to new object



Example:
A backpack carrying memories.

A function remembers variables from where it was created even after outer function is finished.





5. Functional Programming in JS

Master:

Pure functions

Immutability

Composition

Higher-order functions

Point-free style (optional)

Example:
Like cooking without touching ingredients directly — clean & predictable.



