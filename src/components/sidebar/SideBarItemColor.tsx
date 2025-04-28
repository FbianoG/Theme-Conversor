import { Button } from '../ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import Colors from './Colors';

interface Props {
	item: string;
	ItemSelected: string;
	selectColor: (e: React.MouseEvent | React.ChangeEvent) => void;
	setItemSelected: (value: string) => void;
}

const SideBarItemColor = ({ item, ItemSelected, setItemSelected, selectColor }: Props) => {
	const backgroundColor = `bg-${item}`;
	const textColor = `text-${item === 'background' ? 'foreground' : item + '-foreground'}`;

	return (
		
			<Drawer>
				<DrawerTrigger asChild>
					<button className='w-18 cursor-pointer overflow-hidden duration-300 hover:scale-105' onClick={() => setItemSelected(item)}>
						<div className={`h-10 ${backgroundColor} ${textColor} grid place-items-center rounded border text-xl font-bold`}>A</div>
						<span className='truncate px-1 text-xs capitalize'>{item}</span>
					</button>
				</DrawerTrigger>
				<DrawerContent className='bg-[#fdfdfd]'>
					{ItemSelected && (
						<div className='mx-auto mt-4 w-max space-x-2'>
							<Button
								variant='ghost'
								className={`${item === ItemSelected ? 'ring-2' : ''} rounded-[0.25rem] border border-[#ddd] text-[#777] capitalize ring-[#999] hover:bg-transparent hover:text-[#999]`}
								onClick={() => setItemSelected(item)}>
								{item}
							</Button>
							<span className='text-[#777]'>-</span>
							<Button
								variant='ghost'
								className={`${(item === 'background' && ('foreground' === ItemSelected ? 'ring-2' : '')) || item + '-foreground' === ItemSelected ? 'ring-2' : ''} rounded-[0.25rem] border border-[#ddd] text-[#777] capitalize ring-[#999] hover:bg-transparent hover:text-[#999]`}
								onClick={() => setItemSelected(item === 'background' ? 'foreground' : item + '-foreground')}>
								{'foreground'}
							</Button>
						</div>
					)}
					<Colors selectColor={selectColor} />
				</DrawerContent>
			</Drawer>
	
	);
};

export default SideBarItemColor;
