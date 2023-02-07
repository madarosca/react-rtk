import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { MovieItemType } from './moviesTypes';
import { BASE_URL, MOVIES_URL } from '../../constants/api';
import episode1 from '../../assets/episode_1.jpg';
import episode2 from '../../assets/episode_2.jpg';

export interface MoviesState {
	count: number;
	status: 'idle' | 'loading' | 'failed';
	moviesList: MovieItemType[];
}

const initialState: MoviesState = {
	count: 0,
	status: 'idle',
	moviesList: [],
};

export const getMoviesAsync = createAsyncThunk('movies/fetchMovies', async () => {
	const response = await fetch(`${BASE_URL}/${MOVIES_URL}`);
	const data = await response.json();

	return data;
});

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setMoviesCount: (state, action: PayloadAction<number>) => {
			state.count = action.payload;
		},
		setMovies: (state, action: PayloadAction<MovieItemType[]>) => {
			state.moviesList = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMoviesAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getMoviesAsync.fulfilled, (state, action) => {
				state.status = 'idle';
				state.count = action.payload.count;

				const orderedMovies = action.payload.results.sort(
					(a: MovieItemType, b: MovieItemType) => a.episode_id - b.episode_id
				);
				state.moviesList = orderedMovies;
			})
			.addCase(getMoviesAsync.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const { setMoviesCount, setMovies } = moviesSlice.actions;

export const selectMoviesCount = (state: RootState) => state.movies.count;
export const selectMovies = (state: RootState) => state.movies.moviesList;
export const selectMoviesStatus = (state: RootState) => state.movies.status;

export default moviesSlice.reducer;
