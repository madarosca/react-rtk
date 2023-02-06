import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Navigation.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation-container'>
				<Link to='/'>
					<img
						src={logo}
						className='navigation-logo'
						alt='logo'
					/>
				</Link>
				<Link to='counter'>Counter</Link>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
