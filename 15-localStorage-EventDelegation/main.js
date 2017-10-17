const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const clearAll = document.getElementById('clearAll');
const checkAll = document.getElementById('checkAll');

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

  // we are commenting this to be handled by the clearAllItems FUCNTION
  // populateList(items, itemsList);
  // localStorage.setItem('items', JSON.stringify(items));
  clearAllItems();
  
  this.reset(); // this refers to the form to reset it
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate,i) => { //the i refers to index
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
  // as a reminder , mathces is an API

  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function checkAllItems() {
  items.map(item => item.done = true);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearAllItems() {
  items.map(item => item.done = false);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}
// you want to listen when the submit button is clicked
// and run a fucntion when clicked
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

clearAll.addEventListener('click', clearAllItems);
checkAll.addEventListener('click', checkAllItems);

populateList(items, itemsList);
