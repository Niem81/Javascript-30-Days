
const group = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are chekcing it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    group.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting check inbetween');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

group.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
