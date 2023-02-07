const SmallLoader = () => {
	let circleCommonClasses = 'h-3.5 w-3.5 bg-current rounded-full text-violet-700';

	return (
		<div className='flex flex-col justify-center items-center h-96'>
			<div className='flex mb-2'>
				<div className='pr-4'>Please wait</div>
				<div className={`${circleCommonClasses} self-end mr-1 animate-bounce`}></div>
				<div className={`${circleCommonClasses} self-end mr-1 animate-bounce100`}></div>
				<div className={`${circleCommonClasses} self-end animate-bounce200`}></div>
			</div>
		</div>
	);
};

export default SmallLoader;
