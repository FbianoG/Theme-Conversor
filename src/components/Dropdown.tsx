'use client';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button, { Variant } from './Button';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title: any;
	variant?: Variant;
	position?: 'top' | 'bottom' | 'left' | 'right';
	children?: React.ReactNode;
}

const Dropdown = ({ variant, title, position, children, className }: Props) => {
	const dropdown = useRef<HTMLDivElement>(null);
	const [showDropDown, setShowDropDown] = useState<boolean>(false);
	const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdown.current && !dropdown.current.contains(event.target as Node)) setShowDropDown(false);
		};

		if (showDropDown) {
			document.body.addEventListener('click', handleClickOutside);
		} else {
			document.body.removeEventListener('click', handleClickOutside);
		}

		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		};
	}, [showDropDown]);

	useEffect(() => {
		if (showDropDown && dropdown.current) {
			const rect = dropdown.current.getBoundingClientRect();
			let top = rect.bottom;
			let left = rect.left;

			switch (position) {
				case 'top':
					top = rect.top - dropdown.current.offsetHeight;
					break;
				case 'left':
					left = rect.left - dropdown.current.offsetWidth;
					break;
				case 'right':
					left = rect.right;
					break;
				default:
					break;
			}

			setDropdownPosition({ top, left });
		}
	}, [showDropDown, position]);

	const baseClass = 'dropdown-children bg-popover text-popover-foreground absolute flex w-max max-w-72 flex-col gap-1 rounded p-1 text-sm shadow-xl border border-muted';

	return (
		<div className={`relative ${className || ''}`} ref={dropdown} onClick={() => setShowDropDown(!showDropDown)}>
			<Button variant={variant}>{title}</Button>
			{showDropDown &&
				createPortal(
					<div
						className={baseClass}
						style={{
							position: 'absolute',
							top: dropdownPosition.top,
							left: dropdownPosition.left,
							zIndex: 50,
						}}>
						{children}
					</div>,
					document.body,
				)}
		</div>
	);
};

export default Dropdown;

// ! Aplicar em globals.css
// .dropdown-children > * {
// 	@apply hover:bg-muted py-1 px-2 cursor-pointer rounded duration-300 z-40;
// }
