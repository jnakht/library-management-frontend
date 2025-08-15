import type { IPaginationInitialState } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState : IPaginationInitialState = {
    page: 0,
    pageCount: 1,
    rowsPerPage: 10,
    totalData: 100,
}

export const borrowPaginationSlice = createSlice({
    name: "borrowPaginationSlice",
    initialState,
    reducers: {
       setPage: (state, action : PayloadAction<number>) => {
            state.page = action.payload;
        },
        setPageCount: (state, action : PayloadAction<number>) => {
            state.pageCount = action.payload;
        },
        setRowsPerPage: (state, action : PayloadAction<number>) => {
            state.rowsPerPage = action.payload;
        },
        setTotalData: (state, action : PayloadAction<number>) => {
            state.totalData = action.payload;
        } 
    }
})


export const { setPage, setPageCount, setRowsPerPage, setTotalData } = borrowPaginationSlice.actions
export default borrowPaginationSlice.reducer

