

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    tagTypes: ["books"],
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
        })
    }),
})

export const { useGetAllBooksQuery, useCreateBookMutation } = booksApi