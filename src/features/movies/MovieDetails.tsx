import { useGetMovieQuery } from '../../app/api/moviesApiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Fragment } from 'react';

type MovieItemRouteParams = {
	movieId: string;
};

const MovieDetails = () => {
	const { movieId } = useParams<keyof MovieItemRouteParams>() as MovieItemRouteParams;
	const navigate = useNavigate();

	const { data: movieDetails, isLoading } = useGetMovieQuery(movieId);

	const handleBackClick = () => {
		navigate(-1);
	};

	return (
		<div className='movie-details-container'>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				!!movieDetails && (
					<Fragment>
						<div>
							<h3>{movieDetails.title}</h3>
							<p>Directed by: {movieDetails.director}</p>
							<p>Released: {movieDetails.release_date}</p>
							<button
								type='submit'
								onClick={handleBackClick}
							>
								Back
							</button>
						</div>
						<br />
						<footer>
							<small>
								<i>Fetched movie details with RTK Query</i>
							</small>
						</footer>
					</Fragment>
				)
			)}
		</div>
	);
};

export default MovieDetails;
