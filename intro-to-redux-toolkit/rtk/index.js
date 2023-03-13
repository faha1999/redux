const store = require('./app/store');
const { counterActions } = require('./features/counter/counterSlice');

// initial state
console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

store.dispatch(counterActions.decrement());
