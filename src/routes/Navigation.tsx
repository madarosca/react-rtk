import { Fragment, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ReactComponent as NavLogo } from '../assets/logo.svg';
import { NAVIGATION_LINKS, BASE_ROUTE } from '../constants/routes';

const Navigation = () => {
	const location = useLocation();
	const [navbarOpen, setNavbarOpen] = useState(false);
	const getActiveLink = (name: string) => (!!location.pathname.includes(name) ? 'text-violet-900' : 'text-black');
	const handleNavbarOpen = () => setNavbarOpen(!navbarOpen);

	return (
		<Fragment>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-2 bg-violet-200/80 backdrop-blur drop-shadow-[0px_7px_5px_rgba(8,145,178,0.1)]'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link to={BASE_ROUTE}>
							<NavLogo className='fill-current h-12 w-12' />
						</Link>
						<button
							className='text-white cursor-pointer text-sm leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={handleNavbarOpen}
						>
							<i className='fas fa-bars'>show/hide</i>
						</button>
					</div>
					<div
						className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							{NAVIGATION_LINKS.map((route, index) => (
								<Link
									key={index}
									to={route}
									className={`${getActiveLink(
										route
									)} lg:px-3 py-2 flex items-center text-sm uppercase font-bold hover:text-violet-800`}
								>
									<span className='ml-2'>{route}</span>
								</Link>
							))}
						</ul>
					</div>
				</div>
			</nav>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
