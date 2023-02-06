import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moviesReducer from '../features/movies/moviesSlice';
import { moviesApiSlice } from './api/moviesApiSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		movies: moviesReducer,
		[moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
