const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const addItems = document.querySelector('.add-band');

function changeName(){
  const articles = ["A", "The", "An"];
  const newBands = [];
  bands.map((band) => {
    articles.map(art => {
      if(band.includes(art)) {
        console.log(band, art);
        newB = band.split(art).join('').trim();
        console.log(newB);
        newBands.push(newB);
      }
    })
  })
  console.log(newBands);
  return newBands;
}

function sortingBands(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}

const bands2 = changeName();
const sortedBands = bands2.sort(sortingBands);
console.log(sortedBands);

// function replaceName(band) {
//   return band.replace(/^(a |the |an )/i, '').trim();
// }
//
// const sortedBands = bands.sort((a, b) => replaceName(a) > replaceName(b) ? 1 : -1);
//
document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('')

// console.log(sortedBands);

function addBand(e) {
  e.preventDefault();

  const text = (this.querySelector('[name=band]')).value;
  console.log(text);
  bands.push(text);
  const bands2 = changeName();
  const sortedBands = bands2.sort(sortingBands);
  document.querySelector('#bands').innerHTML =
    sortedBands
      .map(band => `<li>${band}</li>`)
      .join('')
}

addItems.addEventListener('submit', addBand);
