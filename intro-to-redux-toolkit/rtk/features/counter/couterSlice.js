const createSlice = require('@reduxjs/toolkit');

// INITIAL STATE
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

modules.export = counterSlice.reducer;
modules.export.counterActions = counterSlice.actions;
