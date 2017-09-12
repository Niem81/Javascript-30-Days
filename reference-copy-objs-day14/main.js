
// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'wesley';
console.log(name, name2);

// an array
const players = ['Yaya', 'Micha', 'Moni', 'Moti'];

const team = players;
console.log(players,team);
// however what happens when we update that array?
team[3] = 'Lux';

// now here is the problem!
console.log(players,team);
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// we can make a copy with slice
const team2 = players.slice();
// or create a new array and concat the old one in
const team3 = [].concat(players);
// or with es6 with spread operator
const team4 = [...players];
team4[3] = 'Rawr';
console.log(team4);

// other with with Array object
const team5 = Array.from(players);


// NOW IN OBJECTS

const person = {
  name: 'Yaya',
  age: 20
};

// and think we make a copy
const captain = person;
captain.number = 99;
console.log(captain, person);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 22 });
console.log(cap2, captain, person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const charles = {
  name: 'Charles',
  age: 100,
  social: {
    twitter: '@charles',
    facebook: 'charles.developer'
  }
};

console.clear();
console.log(charles);

// with the option of Object.assign it doesnt go to much deep to update the values
const dev = Object.assign({}, charles);
dev.social.twitter = '@dev';

// with JSON.parse it does go deep to update values but it is not recommended
// that is bcause JSON.stringify returns a string and that data is no longer an Object
const dev2 = JSON.parse(JSON.stringify(charles));
dev2.social.twitter = '@dev2';
console.log(dev,dev2,charles);
