import { createSlice } from "@reduxjs/toolkit";
import {data} from '../../../assets/booksData/fiction.ts'
import type { RootState } from "@/redux/store.ts";

const initialState = data;

export const fictionSlice = createSlice({
    name: 'fiction',
    initialState,
    reducers: {},
})

export const getFictionBooks = (state: RootState) => {
    return state.fictionBooks;
}

export default fictionSlice.reducer
