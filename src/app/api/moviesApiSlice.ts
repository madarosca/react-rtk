import { MOVIES_URL } from '../../constants/api';
import { MovieItemType, Movies } from '../../features/movies/moviesTypes';
import { baseApi } from './baseApi';

export const moviesApiSlice = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getMovies: builder.query<Movies, string>({
			query: () => MOVIES_URL,
		}),
		getMovie: builder.query<MovieItemType, string>({
			query: (movieId) => `${MOVIES_URL}/${movieId}`,
		}),
	}),
	overrideExisting: false,
});

export const { useGetMoviesQuery, useGetMovieQuery } = moviesApiSlice;
