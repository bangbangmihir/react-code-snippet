import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice';
//persisted Reducer

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


const reducers = combineReducers({
    users:userSlice
  });


const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    // reducer:{
    //     // service:serviceslice,
    //     // preducer:persistedReducer
    //     cart:persistedReducer,
    //     login:persistedReducer,
    //     coupon:persistedReducer
    // },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})