import { Fragment } from 'react';
import { useGetMovieQuery } from '../../app/api/moviesApiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Episode1 from '../../assets/episode_1.jpg';
import Episode2 from '../../assets/episode_2.jpg';
import Episode3 from '../../assets/episode_3.jpg';
import Episode4 from '../../assets/episode_4.jpg';
import Episode5 from '../../assets/episode_5.jpg';
import Episode6 from '../../assets/episode_6.jpg';
import SmallLoader from '../../components/loader/SmallLoader';

type MovieItemRouteParams = {
	movieId: string;
};

const MovieDetails = () => {
	const { movieId } = useParams<keyof MovieItemRouteParams>() as MovieItemRouteParams;
	const navigate = useNavigate();

	const { data: movieDetails, isLoading } = useGetMovieQuery(movieId);

	const getImageUrl = () => {
		switch (movieDetails?.episode_id) {
			case 1:
				return Episode1;
			case 2:
				return Episode2;
			case 3:
				return Episode3;
			case 4:
				return Episode4;
			case 5:
				return Episode5;
			case 6:
				return Episode6;
			default:
				return '';
		}
	};

	const handleBackClick = () => {
		navigate(-1);
	};

	return (
		<div className='max-w-screen-lg mx-auto flex flex-col items-center py-4 xs:flex-row'>
			{isLoading ? (
				<SmallLoader />
			) : (
				!!movieDetails && (
					<Fragment>
						<div className='max-w-md rounded overflow-hidden shadow-lg my-4'>
							<img
								className='w-full'
								src={getImageUrl()}
								alt='Star Wars'
							/>
							<div className='px-6 py-4'>
								<div className='font-bold text-xl mb-4 text-center'>
									Episode {movieDetails.episode_id}: {movieDetails.title}
								</div>
								<p className='text-gray-700 text-base'>{movieDetails.opening_crawl}</p>
							</div>
							<div className='px-6 pt-4 pb-2'>
								<span className='inline-block bg-violet-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Directed by: {movieDetails.director}
								</span>
								<span className='inline-block bg-violet-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Released: {movieDetails.release_date}
								</span>
							</div>
							<div className='p-4 flex justify-center'>
								<button
									className='bg-violet-600 hover:bg-violet-800 text-violet-200 text-sm py-2 px-4 rounded shadow hover:shadow-md outline-none focus:outline-none'
									type='submit'
									onClick={handleBackClick}
								>
									Back to all movies
								</button>
							</div>
							<footer className='text-slate-600 flex justify-center py-2'>
								<small>
									<i>Fetched movie details with RTK Query</i>
								</small>
							</footer>
						</div>
					</Fragment>
				)
			)}
		</div>
	);
};

export default MovieDetails;
