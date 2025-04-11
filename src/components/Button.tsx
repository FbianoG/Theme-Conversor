'use client';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
	children?: React.ReactNode;
}

export type Variant = 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline';

const Button = ({ variant, children, className, ...rest }: Props) => {
	const baseClass = 'cursor-pointer rounded px-4 py-2 text-sm font-medium duration-150 hover:brightness-110 active:scale-95';

	let variantClass = '';
	switch (variant) {
		case 'secondary':
			variantClass = 'bg-secondary text-secondary-foreground';
			break;
		case 'destructive':
			variantClass = 'bg-destructive text-destructive-foreground';
			break;
		case 'ghost':
			variantClass = 'bg-none text-foreground hover:bg-muted';
			break;
		case 'outline':
			variantClass = 'bg-none text-foreground border border-muted';
			break;
		default:
			variantClass = 'bg-primary text-primary-foreground';
	}

	return (
		<button className={`${baseClass} ${variantClass} ${className || ''}`} {...rest}>
			{children}
		</button>
	);
};

export default Button;
