'use client';
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectLabel, SelectItem } from '../ui/select';

interface Props {
	setitemSelected: (value: string) => void;
}

const SideBarSelect = ({ setitemSelected }: Props) => {


	
	return (
		<Select onValueChange={(e) => setitemSelected(e)}>
			<SelectTrigger className='w-full capitalize'>
				<SelectValue placeholder='Select an Item' />
			</SelectTrigger>
			<SelectContent className='capitalize'>
				<SelectGroup>
					<SelectLabel>Deep</SelectLabel>
					<SelectItem value='background'>background</SelectItem>
					<SelectItem value='card'>card</SelectItem>
					<SelectItem value='popover'>popover</SelectItem>
					<SelectItem value='primary'>primary</SelectItem>
					<SelectItem value='secondary'>secondary</SelectItem>
					<SelectItem value='accent'>accent</SelectItem>
					<SelectItem value='muted'>muted</SelectItem>
					<SelectItem value='destructive'>destructive</SelectItem>
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>Text</SelectLabel>
					<SelectItem value='foreground'>foreground</SelectItem>
					<SelectItem value='card-foreground'>card-foreground</SelectItem>
					<SelectItem value='popover-foreground'>popover-foreground</SelectItem>
					<SelectItem value='primary-foreground'>primary-foreground</SelectItem>
					<SelectItem value='secondary-foreground'>secondary-foreground</SelectItem>
					<SelectItem value='accent-foreground'>accent-foreground</SelectItem>
					<SelectItem value='muted-foreground'>muted-foreground</SelectItem>
					<SelectItem value='destructive-foreground'>destructive-foreground</SelectItem>
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>Outros</SelectLabel>
					<SelectItem value='input'>input</SelectItem>
					<SelectItem value='border'>border</SelectItem>
					<SelectItem value='ring'>ring</SelectItem>
					<SelectItem value='chart-1'>chart-1</SelectItem>
					<SelectItem value='chart-2'>chart-2</SelectItem>
					<SelectItem value='chart-3'>chart-3</SelectItem>
					<SelectItem value='chart-4'>chart-4</SelectItem>
					<SelectItem value='chart-5'>chart-5</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default SideBarSelect;
