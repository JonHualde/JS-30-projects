const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

const message = "This is a test";

// Regular
console.log("hello" + ", This is a test");

// Interpolated
console.log(`Hello, ${message}`);

// Styled
console.log("%c I am some great text", "font-size: 30px; background: red");

// warning!
console.warn("Oh noooo");

// Error :|
console.error("Displays an error in the console");

// Info
console.info("Crocodiles eat 3-4 people per year!");

// Testing
console.assert(1 === 0, "that's wrong");

// clearing
console.clear(); // clears the console

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This dog's name is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("dog");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((result) => {
    console.groupCollapsed("time");
    console.log(result);
    console.timeEnd("fetching data");
    console.groupEnd("time");
  });

  // table
  console.table(dogs)
