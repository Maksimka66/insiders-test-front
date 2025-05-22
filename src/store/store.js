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
import { tasksReducer } from './tasks/tasksSlice';
import { tasksApi } from './tasks/tasksApi';

const rootPersistConfig = {
    key: 'insiders-test',
    storage,
    whitelist: ['auth', 'tasks']
};

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    [authApi.reducerPath]: authApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer
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
            .concat(tasksApi.middleware)
});

export const persistor = persistStore(store);
