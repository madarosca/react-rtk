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
		<div className='max-w-screen-lg mx-auto flex flex-col items-center py-4 xs:flex-row'>
			<header>All Star Wars movies</header>
			{isLoading === 'loading' ? (
				<BigLoader />
			) : (
				<div className='flex flex-col p-2'>
					<div className='text-center pb-4'>Total Episodes: {moviesCount}</div>
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
