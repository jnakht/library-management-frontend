

import { type IPaginationRes, type IPaginationReq, type ISingleBookRes, type ICreateBookReq, type IUpdateRes, type IUpdateReq, type IDeleteBookRes, type BorrowRes, type BorrowReq, type BorrowSummaryRes, type BorrowSummaryReq } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://assignment-3-library-management-bac-wheat.vercel.app"
    }),
    tagTypes: ["books", "book", "update", "delete"],
    endpoints: (build) => ({
        getAllBooks: build.query<IPaginationRes, IPaginationReq>({
            query: (prop) => `/api/books?page=${prop?.page}&limit=${prop?.limit}`,
            providesTags: ['books'],
        }),
        createBook: build.mutation<ISingleBookRes, ICreateBookReq>({
            query: (data) => ({
                url: '/api/books',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['books']
        }),
        getBookById: build.query<ISingleBookRes, string>({
            query: (id) => `/api/books/${id}`,
            providesTags: ['book'],
        }),
        updateBook: build.mutation<IUpdateRes, IUpdateReq>({
            query: ({_id, ...data}) => ({
                url: `/api/books/${_id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ["books", "book"]
        }),
        deleteBook: build.mutation<IDeleteBookRes, string>({
            query: (id) => ({
                url: `/api/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["book", "books"]
        }),
        borrowBook: build.mutation<BorrowRes, BorrowReq>({
            query: (data) => ({
                url: '/api/borrow',
                method: 'POST',
                body: {
                    ...data
                }
            })
        }),
        borrowSummary: build.query<BorrowSummaryRes, BorrowSummaryReq>({
            query: (prop) => `/api/borrow?page=${prop?.page}&limit=${prop?.limit}`,
        }),
    }),
})

export const { useGetBookByIdQuery, useGetAllBooksQuery,  useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation, useBorrowBookMutation, useBorrowSummaryQuery } = booksApi