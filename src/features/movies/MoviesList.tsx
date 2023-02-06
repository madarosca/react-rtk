// import { useGetMoviesQuery } from '../../app/api/moviesApiSlice';
import MovieItem from '../../components/movie-item/MovieItem';
import { getMoviesAsync, selectMovies, selectMoviesCount, selectMoviesStatus } from './moviesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';

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
		<div className='movies-container'>
			<header>All Star Wars movies</header>
			{isLoading === 'loading' ? (
				<div>Loading...</div>
			) : (
				<div className='movie-item-container'>
					<p>Total Episodes: {moviesCount}</p>
					{movies?.map((movie) => (
						<MovieItem
							key={movie.episode_id}
							movie={movie}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default MoviesList;
