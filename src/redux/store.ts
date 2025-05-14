import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from './slices/dummySlice';

const rootReducer = {
  dummy: dummyReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 