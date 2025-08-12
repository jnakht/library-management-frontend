
import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from './features/books/booksApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import paginationReducer from './features/books/paginationSlice'
import fictionReducer from './features/books/fictionSlice'

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        [booksApi.reducerPath]: booksApi.reducer,
        fictionBooks: fictionReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(booksApi.middleware),
})


setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch