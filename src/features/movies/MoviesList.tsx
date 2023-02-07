// import { useGetMoviesQuery } from '../../app/api/moviesApiSlice';
import MovieItem from '../../components/movie-item/MovieItem';
import { getMoviesAsync, selectMovies, selectMoviesCount, selectMoviesStatus } from './moviesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import BigLoader from '../../components/loader/BigLoader';

const MoviesList = () => {
	const moviesCount = useAppSelector(selectMoviesCount);
	const movies = useAppSelector(selectMovies);
	const isLoading = useAppSelector(selectMoviesStatus);
	const dispatch = useAppDispatch();

	// Get movies using RTK Query
	// const { data, isLoading, error } = useGetMoviesQuery('')

	useEffect(() => {
		dispatch(getMoviesAsync());
	}, [dispatch]);

	return (
		<div className='movies-container py-4 px-4'>
			<header>All Star Wars movies</header>
			{isLoading === 'loading' ? (
				<BigLoader />
			) : (
				<div className='movie-item-container'>
					<p>Total Episodes: {moviesCount}</p>
					{movies?.map((movie) => (
						<MovieItem
							key={movie.episode_id}
							movie={movie}
						/>
					))}
					<br />
					<footer>
						<small>
							<i>Fetched movies with RTK createAsyncThunk</i>
						</small>
					</footer>
				</div>
			)}
		</div>
	);
};

export default MoviesList;
