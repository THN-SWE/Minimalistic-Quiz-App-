export default[
  {
    question: "1st",
    options: ["A", "B", "C", "D"], // this type of data setting is know as mapping (key value pair)
    answer: 1,
  },
  {
    question: "2nd",
    options: ["A", "B", "C", "D"],
    answer: 0,
  },
  {
    question: "3rd",
    options: ["A", "B", "C", "D"],
    answer: 1,
  },
  {
    question: "4th",
    options: ["A", "B", "C", "D"],
    answer: 2,
  },
  {
    question: "5th",
    options: ["A", "B", "C", "D"],
    answer: 3,
  },
  {
    question: "6th",
    options: ["A", "B", "C", "D"],
    answer: 4,
  },
];

// When using the function keyword to define a function, you are creating a named function. In the example I showed you earlier, sayHello is the name of the function.

// When using an arrow function, you can create either a named function or an anonymous function. If you want to create a named function using an arrow function, you can assign it to a variable just like any other value in JavaScript.

// For example, here's how you would create a named arrow function:

// javascript
// Copy code
// const sayHello = (name) => {
//   console.log(`Hello, ${name}!`);
// }
// In this example, sayHello is the name of the function, just like in the previous example using the function keyword.

// If you don't need to give your function a name, you can create an anonymous arrow function. Here's an example:

// typescript
// Copy code
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => {
//   return number * 2;
// });
// In this example, we're using an anonymous arrow function as the argument to the map() method. The arrow function takes a single argument (number) and returns that number multiplied by 2.

// As for whether you can use arrow functions all the time, the answer is mostly yes. Arrow functions are a powerful and convenient way to write functions in JavaScript, and you can use them in almost any situation where you would use a regular function.

// However, there are a few situations where you might still want to use a regular function, such as when you need to use the this keyword inside the function. Arrow functions don't have their own this context, so they can't be used as methods on objects.

// I hope that clears things up! Let me know if you have any more questions.



