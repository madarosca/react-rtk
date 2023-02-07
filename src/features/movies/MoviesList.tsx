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
		<div className='max-w-screen-sm mx-auto flex flex-col items-center py-4 xs:flex-row'>
			<header className='font-medium'>All Star Wars movies</header>
			{isLoading === 'loading' ? (
				<BigLoader />
			) : (
				<div className='flex-col p-2 min-w-full'>
					<div className='text-center pb-4 text-base'>Total Episodes: {moviesCount}</div>
					{movies?.map((movie) => (
						<MovieItem
							key={movie.episode_id}
							movie={movie}
						/>
					))}
					<br />
					<footer className='text-slate-600 flex justify-center py-2'>
						<p className='italic text-base'>Movies list is fetched with RTK createAsyncThunk</p>
					</footer>
				</div>
			)}
		</div>
	);
};

export default MoviesList;
