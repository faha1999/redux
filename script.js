// select dom element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// initial state
let count = 0;

// event listener

incrementEl.addEventListener('click', () => {
  count++;
  counterEl.innerHTML = count;
});

decrementEl.addEventListener('click', () => {
  count--;
  counterEl.innerHTML = count;
});
