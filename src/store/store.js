import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/authApi';
import { authReducer } from './auth/authSlice';
import { usersReducer } from './users/usersSlice';
import { usersApi } from './users/usersApi';

const rootPersistConfig = {
    key: 'insiders-test',
    storage,
    whitelist: ['auth', 'users']
};

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: usersReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
            .concat(authApi.middleware)
            .concat(usersApi.middleware)
});

export const persistor = persistStore(store);
