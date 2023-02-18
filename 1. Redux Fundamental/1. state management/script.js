// select dom element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

const counterEl2 = document.getElementById('counter2');
const incrementEl2 = document.getElementById('increment2');
const decrementEl2 = document.getElementById('decrement2');

// initial state
let count = 0;
let count2 = 0;

// event listener

incrementEl.addEventListener('click', () => {
  count++;
  counterEl.innerHTML = count;
});

decrementEl.addEventListener('click', () => {
  count--;
  counterEl.innerHTML = count;
});

// count2
incrementEl2.addEventListener('click', () => {
  count2++;
  counterEl2.innerHTML = count2;
});

decrementEl2.addEventListener('click', () => {
  count2--;
  counterEl2.innerHTML = count2;
});
