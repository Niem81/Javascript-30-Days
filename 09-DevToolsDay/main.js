
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// To check where are making changes on an Element
// you can inspect it and right click the element and select 'Break on:'
// inside that option you will select attributes and modifications
// it will display the location - lines of the cahnges to that element

// Types of console

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');
let variable = 'yaya'
console.log(`Hello I am ${variable}`);

// styled
console.log('%c I am some great text', 'font-size:30px; background:red; text-shadow: 10px 10px 0 white');

// warning
console.warn('OH NOO');

// Error
console.error('Shit!');

// info
console.info('Crocodiles eat 3-4 people per year');

// testing
console.assert(1 === 1, 'That is wrong');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// Viewing dom Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  // console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// table
console.table(dogs);
