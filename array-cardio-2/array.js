// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const areSomeOlderThan19 = people.some(
  (person) => new Date().getFullYear() - 19 > person.year
);
console.log(areSomeOlderThan19);

// Array.prototype.every() // is everyone 19 or older?
const areEveryPersonOlderThan19 = people.every(
  (person) => person.year < new Date().getFullYear() - 19
);
console.log(areEveryPersonOlderThan19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findUserById = comments.find((element) => element.id === 823423);
console.log(findUserById);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findUserByIdAndDeleteComment = comments.findIndex(
  (element) => element.id === 823423
);

const newComments = [
  ...comments.slice(0, findUserByIdAndDeleteComment),
  ...comments.slice(findUserByIdAndDeleteComment + 1),
];
console.log({ findUserByIdAndDeleteComment });
console.log(newComments, "new");
