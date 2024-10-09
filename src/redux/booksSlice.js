import { createSlice } from "@reduxjs/toolkit";
import { dummyBooks } from "../utils/dummyData";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: dummyBooks,
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
