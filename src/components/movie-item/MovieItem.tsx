import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MovieItemType } from '../../features/movies/moviesTypes';
import Accordion from '../accordion/Accordion';
import './MovieItem.scss';

type MovieItemProps = {
	movie: MovieItemType;
};

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
	const { url, title, episode_id, director } = movie;

	return (
		<Accordion
			index={episode_id}
			title={
				<div>
					Episode {episode_id}: {title}
				</div>
			}
			children={
				<div className='flex flex-col '>
					<div>Directed by: {director}</div>
					<button className='bg-violet-500 p-2 text-sm mt-4 md:w-32 md:self-end text-violet-200'>
						<Link to={`${url.charAt(url.length - 2)}`}>More details...</Link>
					</button>
				</div>
			}
		/>
	);
};

export default MovieItem;
