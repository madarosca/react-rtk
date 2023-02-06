import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MovieItemType } from '../../features/movies/moviesTypes';
import './MovieItem.scss';

type MovieItemProps = {
	movie: MovieItemType;
};

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
	const { url, title } = movie;

	return (
		<div className='movie-item-link'>
			<Link to={`${url.charAt(url.length - 2)}`}>{title}</Link>;
		</div>
	);
};

export default MovieItem;
