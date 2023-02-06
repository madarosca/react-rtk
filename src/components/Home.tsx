import logo from '../assets/logo.svg';
import './Home.scss';

const Home = () => {
	return (
		<div className='home-container'>
			<header className='app-header'>
				<p>React and RTK</p>
				<img
					src={logo}
					className='app-logo'
					alt='logo'
				/>
			</header>
		</div>
	);
};

export default Home;
