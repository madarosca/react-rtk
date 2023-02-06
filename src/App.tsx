import { Counter } from './features/counter/Counter';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navigation from './routes/Navigation';
import Home from './components/Home';

function App() {
	return (
		<div className='app'>
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
						path='login'
						element={<div>Login</div>}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
