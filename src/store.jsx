// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/AuthSlice';
import { authApi } from './auth/AuthApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
