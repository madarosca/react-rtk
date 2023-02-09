import { useState, FC, ReactNode } from 'react';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';

type AccordionProps = {
	title: string | ReactNode;
	children: ReactNode;
	index: number;
};

const Accordion: FC<AccordionProps> = ({ title, children, index }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSetIndex = () => (activeIndex !== index ? setActiveIndex(index) : setActiveIndex(0));

    return (
		<div
			className={`p-2 border border-gray-100 bg-violet-200 text-black cursor-pointer ${
				activeIndex !== index ? 'hover:opacity-70 transition ease-in duration-300' : 'hover:opacity-100'
			}`}
		>
			<div
				onClick={handleSetIndex}
				className={`flex w-full justify-between p-2 mt-2 ${
					activeIndex === index ? 'border-b border-violet-200/80' : 'border-b-0'
				}`}
			>
				<div className='text-xl'>{title}</div>
				<div className='ml-4'>
					{activeIndex === index ? (
						<TbChevronUp className='w-6 h-6' />
					) : (
						<TbChevronDown className='w-6 h-6' />
					)}
				</div>
			</div>

			{activeIndex === index && <div className='shadow-3xl rounded-2xl shadow-violet-500/50 p-2'>{children}</div>}
		</div>
	);
};

export default Accordion;
