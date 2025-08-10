

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    tagTypes: ["books", "book", "update"],
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: (prop) => `/api/books?page=${prop?.page}&limit=${prop?.limit}`,
            providesTags: ['books'],
        }),
        createBook: build.mutation({
            query: (data) => ({
                url: '/api/books',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['books']
        }),
        getBookById: build.query({
            query: (id) => `/api/books/${id}`,
            providesTags: ['book'],
        }),
        updateBook: build.mutation({
            query: ({id, ...data}) => ({
                url: `/api/books/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ["books", "book"]
        }),
        deleteBook: build.mutation({
            query: (id) => ({
                url: `/api/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["book", "books"]
        }),
        borrowBook: build.mutation({
            query: (data) => ({
                url: '/api/borrow',
                method: 'POST',
                body: {
                    ...data
                }
            })
        })
    }),
})

export const { useGetBookByIdQuery, useGetAllBooksQuery,  useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation, useBorrowBookMutation } = booksApi