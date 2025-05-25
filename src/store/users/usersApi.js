import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const usersApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api'
    }),
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE'
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `/users/${data.id}`,
                method: 'PUT',
                body: data
            })
        }),
        changeUser: builder.mutation({
            query: (data) => ({
                url: `/users/${data.id}`,
                method: 'PATCH',
                body: data
            })
        })
    })
});
