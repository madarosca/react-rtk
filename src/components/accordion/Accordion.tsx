import { useState, FC, ReactNode } from 'react';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';

type AccordionProps = {
	title: string | ReactNode;
	children: ReactNode;
	index: number;
};

const Accordion: FC<AccordionProps> = ({ title, children, index }) => {
	const [activeIndex, setActiveIndex] = useState(0);
    const handleSetIndex = () => (activeIndex !== index ? setActiveIndex(index) : setActiveIndex(0));
    
	return (
		<div className='p-2 border border-gray-200 bg-violet-300 text-black cursor-pointer hover:opacity-80'>
			<div
				onClick={handleSetIndex}
				className='flex w-full justify-between p-2 mt-2 transition ease-in duration-200'
			>
				<div className='text-md'>{title}</div>
				<div className='ml-4'>
					{activeIndex === index ? (
						<BsChevronDoubleDown className='w-6 h-6' />
					) : (
						<BsChevronDoubleUp className='w-6 h-6' />
					)}
				</div>
			</div>

			{activeIndex === index && (
				<div className='shadow-3xl rounded-2xl shadow-violet-500/50 p-2 hover:opacity-100'>{children}</div>
			)}
		</div>
	);
};

export default Accordion;
