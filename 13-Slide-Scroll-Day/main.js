
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  console.count(e);
  console.log(window.scrollY);
  sliderImages.forEach(image => {
    // half way through image
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    // bottom of the image
    // offsetTop is going to tell us how far is the top of the image from the page top
    const imageBottom = image.offsetTop + image.height;
    console.log(imageBottom);
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    console.log(isHalfShown, isNotScrolledPast);
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
