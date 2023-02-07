import { Counter } from './features/counter/Counter';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './components/home/Home';
import Movies from './features/movies/MoviesList';
import './App.scss';
import MovieDetails from './features/movies/MovieDetails';

function App() {
	return (
		<div className='app h-screen w-full bg-gradient-to-b from-white via-white to-violet-400'>
			<Routes>
				<Route
					path='/'
					element={<Navigation />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='counter'
						element={<Counter />}
					/>
					<Route
						path='movies'
						element={<Movies />}
					/>
					<Route
						path='/movies/:movieId'
						element={<MovieDetails />}
					/>
					<Route
						path='login'
						element={<div>Login</div>}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
