const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  console.log('Hello');
  e.preventDefault(); // stops the page from reloading
  const text = (this.querySelector('[name=item]')).value;
  // this refers to the form tag, and we are looking inside to get an attribute with name item

  const item = {
    text, //text: text, //'Item Default',
    done: false
  };
  console.log(item);
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); // this refers to the form to reset it
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate,i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

// you want to listen when the submit button is clicked
// and run a fucntion when clicked
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(itmes, itemsList);
