'use client';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const Card = ({ children, className, ...rest }: Props) => {
	return (
		<div className={`bg-card rounded border p-4 shadow ${className || ''}`} {...rest}>
			{children}
		</div>
	);
};

export default Card;
