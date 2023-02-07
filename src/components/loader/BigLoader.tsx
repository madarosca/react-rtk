const BigLoader = () => {
	return (
		<div className='flex flex-col justify-center items-center h-96'>
			{/* <div className='flex items-center justify-center'>
					<div className='w-10 h-10 border-b-2 border-violet-900 rounded-full animate-spin'></div>
				</div>
				<div className='flex items-center justify-center'>
					<div className='w-16 h-16 border-l-2 border-violet-700 rounded-full animate-spin'></div>
				</div> */}
			<div className='w-16 h-16 border-t-4 border-b-4 border-violet-500 rounded-full animate-spin'></div>
			<div className='flex'>Please wait...</div>
		</div>
	);
};

export default BigLoader;
