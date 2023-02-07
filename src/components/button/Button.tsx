import { FC, ButtonHTMLAttributes } from 'react';
import SmallLoader from '../loader/SmallLoader';

export type ButtonProps = {
	isLoading?: boolean;
	customClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, isLoading, customClassName = '', ...otherProps }) => {
	return (
		<button
			className={`${customClassName} bg-violet-600 hover:bg-violet-800 text-violet-200 text-sm py-2 px-4 rounded shadow hover:shadow-md outline-none focus:outline-none`}
			disabled={isLoading}
			{...otherProps}
		>
			{isLoading ? <SmallLoader /> : children}
		</button>
	);
};

export default Button;
