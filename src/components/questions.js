export default [
  {
    question: "What do penguins use to keep their feet warm?",
    options: ["Tiny socks", "Heated rocks", "Blubber slippers", "Ice skates"],
    answer: 3,
  },
  {
    question: "Which planet in our solar system is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Saturn", "Jupiter"],
    answer: 2,
  },
  {
    question: "In what year did the first iPhone come out?",
    options: ["2004", "2007", "2010", "2013"],
    answer: 2,
  },
  {
    question: "What do you call a group of flamingos?",
    options: ["A flock", "A herd", "A flamboyance", "A coven"],
    answer: 3,
  },
  {
    question: "Who is the current Prime Minister of Canada?",
    options: [
      "Justin Bieber",
      "Justin Timberlake",
      "Justin Trudeau",
      "Justin Theroux",
    ],
    answer: 3,
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Liechtenstein", "San Marino"],
    answer: 1,
  },
  {
    question: "How many sides does a heptagon have?",
    options: ["Six", "Seven", "Eight", "Nine"],
    answer: 2,
  },
  {
    question: "What is the name of the dog in the cartoon 'Scooby-Doo'?",
    options: ["Scrappy-Doo", "Marmaduke", "Astro", "Scooby-Dum"],
    answer: 2,
  },
  {
    question: "Who painted the famous 'Mona Lisa' portrait?",
    options: [
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
      "Vincent van Gogh",
    ],
    answer: 2,
  },
  {
    question: "What is the highest mountain in the world?",
    options: [
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount Fuji",
      "Mount McKinley (Denali)",
    ],
    answer: 1,
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
