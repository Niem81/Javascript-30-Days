const api = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// api browser
// fetch will return a promise
// with then it will return a 'blob' of data
fetch(api)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
// using spread operator to push all cities
// spread into

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // nned to figure out if city or state matches what its searched
    const regex = new RegExp(wordToMatch, 'gi'); //match lowercase and uppercase
    return place.city.match(regex) || place.state.match(regex);
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  console.log(this.value);
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName} ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
