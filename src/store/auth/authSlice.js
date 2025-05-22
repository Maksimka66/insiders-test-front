import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
    isRegistered: false,
    token: '',
    refreshToken: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectIsRegistered: (state) => state.isRegistered,
        selectToken: (state) => state.token,
        selectRefreshedToken: (state) => state.refreshToken
    },
    reducers: {
        clearToken: (state) => {
            state.isRegistered = false;
            state.token = null;
            state.refreshToken = null;
        },
        savedToken: (state, { payload }) => {
            state.isRegistered = true;
            state.token = payload.newAccessToken;
            state.refreshToken = payload.newRefreshToken;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state) => {
            state.isRegistered = true;
        });

        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.isRegistered = true;
            state.token = payload.accessToken;
            state.refreshToken = payload.refreshToken;
        });

        builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
            state.isRegistered = false;
            state.token = null;
            state.refreshToken = null;
        });
    }
});

export const { selectIsRegistered, selectToken, selectRefreshedToken } = authSlice.selectors;

export const { clearToken, savedToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
