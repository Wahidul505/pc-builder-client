import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  components: [],
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      state.components = state.components.filter(
        (comp) => comp.category !== action.payload.category
      );
      state.components.push(action.payload);
    },
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { addToPcBuilder } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
