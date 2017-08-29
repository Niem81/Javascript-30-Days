function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return; //stop function

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const units = Array.from(document.querySelectorAll('.unit'));
units.forEach(unit => unit.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
