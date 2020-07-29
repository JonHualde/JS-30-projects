// start with strings, numbers and booleans

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players; // In this case, team is a reference to the original array
console.log(players, team);
// You might think we can just do something like this:
team[3] = "lux";
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice(); // Copy the array

// or create a new array and concat the old one in
team3 = [].concat(players);
// or use the new ES6 Spread
team4 = [...players];
team4[3] = "heyhooooooooooooooo";
console.log(team4);

const team5 = Array.from(players);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

const Jon = {
    name: "Wes Bos",
    age: 80,
    social: {
        twitter: "hey",
        facebook: 'ho'
    }
  };

// and think we make a copy:
const captain = person // BAD WAY to copy an object, still has reference to the original one
console.log(person)
// how do we take a copy instead?
const captain2 = Object.assign({}, person, { age: 77, number: 99});
console.log(captain2)

// Object ...spread
const captain3 = {...person,  age: 50 };
console.log(captain3)

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const captain4 = JSON.parse(JSON.stringify(Jon))