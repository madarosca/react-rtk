import { useState, ChangeEvent } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from './counterSlice';
import './Counter.scss';

export function Counter() {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');

	const incrementValue = Number(incrementAmount) || 0;

	const handleDecrement = () => dispatch(decrement());
	const handleIncrement = () => dispatch(increment());
	const handleSetIncrement = ({ target }: ChangeEvent<HTMLInputElement>) => setIncrementAmount(target.value);
	const handleIncrementByAmount = () => dispatch(incrementByAmount(incrementValue));
	const handleIncrementIfOdd = () => dispatch(incrementIfOdd(incrementValue));
	const handleIncrementAsync = () => dispatch(incrementAsync(incrementValue));

	return (
		<div className='counter-container'>
			<div className='row'>
				<button
					aria-label='Decrement value'
					onClick={handleDecrement}
				>
					-
				</button>
				<span className='value'>{count}</span>
				<button
					aria-label='Increment value'
					onClick={handleIncrement}
				>
					+
				</button>
			</div>
			<div className='row'>
				<input
					className='textbox'
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={handleSetIncrement}
				/>
				<button onClick={handleIncrementByAmount}>Add Amount</button>
				<button
					className='asyncButton'
					onClick={handleIncrementAsync}
				>
					Add Async
				</button>
				<button onClick={handleIncrementIfOdd}>Add If Odd</button>
			</div>
		</div>
	);
}
