import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://insiders.co/api'
    }),
    endpoints: (builder) => ({
        addTask: builder.mutation({
            query: (data) => ({
                url: '/tasks',
                method: 'POST',
                body: data
            })
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'DELETE'
            })
        }),
        updateTask: builder.mutation({
            query: (data) => ({
                url: `/book/${data.id}`,
                method: 'PUT',
                body: data
            })
        }),
        changeTask: builder.mutation({
            query: (data) => ({
                url: `/book/${data.id}`,
                method: 'PATCH',
                body: data
            })
        })
    })
});
