interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

const SubTitle = ({ children, className, ...rest }: Props) => {
	return (
		<h3 className={`text-lg font-semibold ${className || ''}`} {...rest}>
			{children}
		</h3>
	);
};

export default SubTitle;
