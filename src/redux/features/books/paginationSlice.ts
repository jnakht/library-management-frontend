import { createSlice } from "@reduxjs/toolkit";


interface IInitialState {
    page: number,
    pageCount: number,
    rowsPerPage: number,
    totalData: number,
} 

const initialState : IInitialState = {
    page: 0,
    pageCount: 1,
    rowsPerPage: 10,
    totalData: 100,
}


export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setPageCount: (state, action) => {
            state.pageCount = action.payload;
        },
        setRowsPerPage: (state, action) => {
            state.rowsPerPage = action.payload;
        },
        setTotalData: (state, action) => {
            state.totalData = action.payload;
        }
    }
})


export const { setPage, setPageCount, setRowsPerPage, setTotalData } = paginationSlice.actions
export default paginationSlice.reducer

