import { Button } from '../ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { Input } from '../ui/input';
import Colors from './Colors';

interface Props {
	item: string;
	ItemSelected: string;
	selectColor: (e: React.MouseEvent) => void;
	setItemSelected: (value: string) => void;
}

const SideBarOutherColor = ({ item, ItemSelected, setItemSelected, selectColor }: Props) => {
	const itemBtn = () => {
		switch (item) {
			case 'input':
				return <Input className='h-10 w-full disabled:opacity-100' placeholder='ABCDE' disabled />;
			case 'border':
				return <div className={`h-10 rounded border`}></div>;
			case 'ring':
				return <div className={`border-ring ring-ring/50 h-10 rounded border ring-[3px]`}></div>;
			case 'chart-1':
				return <div className={`bg-chart-1 h-10 rounded border`}></div>;
			case 'chart-2':
				return <div className={`bg-chart-2 h-10 rounded border`}></div>;
			case 'chart-3':
				return <div className={`bg-chart-3 h-10 rounded border`}></div>;
			case 'chart-4':
				return <div className={`bg-chart-4 h-10 rounded border`}></div>;
			case 'chart-5':
				return <div className={`bg-chart-5 h-10 rounded border`}></div>;
			default:
		}
	};

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<button className='w-18 cursor-pointer duration-300 hover:scale-105' onClick={() => setItemSelected(item)}>
					{itemBtn()}
					<span className='w-18 truncate overflow-hidden px-1 text-xs capitalize'>{item}</span>
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
					</div>
				)}
				<Colors selectColor={selectColor} />
			</DrawerContent>
		</Drawer>
	);
};

export default SideBarOutherColor;
