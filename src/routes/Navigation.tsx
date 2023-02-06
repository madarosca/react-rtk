import { Fragment } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ReactComponent as NavLogo } from '../assets/logo.svg';
import { COUNTER_ROUTE, MOVIES_ROUTE, LOGIN_ROUTE } from '../constants/routes';
import './Navigation.scss';

const Navigation = () => {
	const location = useLocation();
	const getActiveLink = (name: string) => (!!location.pathname.includes(name) ? 'active' : '');

	return (
		<Fragment>
			<div className='navigation-container'>
				<Link to='/'>
					<NavLogo className='nav-logo' />
				</Link>
				<div className='nav-links'>
					<Link
						to='counter'
						className={`nav-link ${getActiveLink(COUNTER_ROUTE)}`}
					>
						Counter
					</Link>
					<Link
						to='movies'
						className={`nav-link ${getActiveLink(MOVIES_ROUTE)}`}
					>
						Movies
					</Link>
					<Link
						to='login'
						className={`nav-link ${getActiveLink(LOGIN_ROUTE)}`}
					>
						Login
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
