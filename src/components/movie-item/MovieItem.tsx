import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MovieItemType } from '../../features/movies/moviesTypes';
import Accordion from '../accordion/Accordion';
import Button from '../button/Button';
import './MovieItem.scss';

type MovieItemProps = {
	movie: MovieItemType;
};

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
	const { url, title, episode_id, release_date, director, producer } = movie;

	return (
		<Accordion
			index={episode_id}
			title={
				<div>
					Episode {episode_id}: {title}
				</div>
			}
			children={
				<div className='flex flex-col'>
					<div className='text-sm'>Released: {release_date}</div>
					<div className='text-sm'>Directed by: {director}</div>
					<div className='text-sm'>Produced by: {producer}</div>
					<Button customClassName='md:w-30 md:self-end text-xs mt-2'>
						<Link to={`${url.charAt(url.length - 2)}`}>More details...</Link>
					</Button>
				</div>
			}
		/>
	);
};

export default MovieItem;
