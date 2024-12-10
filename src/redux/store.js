import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './state_slices/user/user_slice.js'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'
import courseReducer,{ courseSlice } from './state_slices/course/courseSlice.js'
courseSlice
const rootReducer = combineReducers({
    user:userReducer,
    course:courseReducer,
})

const persistConfig = {
    key:'root',
    storage,
    version:1,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }),
})

export const persistor = persistStore(store)