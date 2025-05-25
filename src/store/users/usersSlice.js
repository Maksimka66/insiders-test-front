import { createSlice } from '@reduxjs/toolkit';
import { usersApi } from './usersApi';

const initialState = {
    users: []
    // title: '',
    // description: '',
    // status: '',
    // priority: ''
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    selectors: {
        selectUsers: (state) => state.users
    },
    extraReducers: (builder) => {
        builder.addMatcher(usersApi.endpoints.addTask.matchFulfilled, (state, { payload }) => {
            console.log(payload);
            state.users.push(payload);
        });

        builder.addMatcher(usersApi.endpoints.deleteTask.matchFulfilled, (state, { payload }) => {
            state.users = state.users.filter((item) => item.id !== payload.id);
        });

        builder.addMatcher(usersApi.endpoints.updateTask.matchFulfilled, (state, { payload }) => {
            state.users;
        });

        builder.addMatcher(usersApi.endpoints.changeTask.matchFulfilled, (state, { payload }) => {
            state.users = state.users.filter((item) => item.id !== payload.id);

            state.users.push(payload);
        });
    }
});

export const { selectUsers } = usersSlice.selectors;

export const usersReducer = usersSlice.reducer;
