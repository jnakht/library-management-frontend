import { createSlice } from "@reduxjs/toolkit";
import {data} from '../../../assets/booksData/fiction.ts'
import type { RootState } from "@/redux/store.ts";
import type { TFictionBook } from "@/types.ts";


const initialState : TFictionBook[] = data;

export const fictionSlice = createSlice({
    name: 'fiction',
    initialState,
    reducers: {},
})

export const getFictionBooks = (state: RootState) : TFictionBook[] => {
    return state.fictionBooks;
}

export default fictionSlice.reducer
