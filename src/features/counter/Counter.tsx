import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from './counterSlice';
import './Counter.scss';

export function Counter() {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');

	const incrementValue = Number(incrementAmount) || 0;

	return (
		<div className='counter-container'>
			<div className='row'>
				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span className='value'>{count}</span>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					+
				</button>
			</div>
			<div className='row'>
				<input
					className='textbox'
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</button>
				<button
					className='asyncButton'
					onClick={() => dispatch(incrementAsync(incrementValue))}
				>
					Add Async
				</button>
				<button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</button>
			</div>
		</div>
	);
}
