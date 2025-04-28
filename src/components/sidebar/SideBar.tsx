'use client';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader } from '../ui/sidebar';
import { Textarea } from '../ui/textarea';
import Themes from '@/utils/themes';
import SideBarItemColor from './SideBarItemColor';
import { ChevronDownIcon, ChevronRightIcon, Copy } from 'lucide-react';
import SideBarOutherColor from './SideBarOutherColor.';

// interface ColorItem {
// 	key: string;
// 	value: string;
// }

const SideBar = () => {
	// const [originText, setOriginText] = useState<string>('');

	const [coversorText, setCoversorText] = useState<string>(Themes.initial);

	const [copy, setCopy] = useState<boolean>(false);

	// Estado para armazenar o CSS dinâmico
	const [dynamicCSS, setDynamicCSS] = useState<string>('');

	const [itemSelected, setItemSelected] = useState<string>('');

	const [radius, setRadius] = useState<string>();

	const [selectTheme, setSelectTheme] = useState<string>('initial');

	const [collapseThemes, setCollapseThemes] = useState<boolean>(true);

	useEffect(() => {
		if (coversorText) setDynamicCSS(coversorText);
		const radius = coversorText.split('\n').find((e) => e.includes('radius'));
		setRadius(radius?.split(':')[1].trim().replace('rem;', ''));
	}, [coversorText]);

	useEffect(() => {
		if (copy)
			setTimeout(() => {
				setCopy(false);
			}, 4000);
	}, [copy]);

	const copyText = () => {
		setCopy(true);
		navigator.clipboard.writeText(coversorText);
	};

	const changeColor = (item: string, newColor: string) => {
		coversorText.split('\n').forEach((e) => {
			if (e.includes(item)) {
				newColor = newColor + ';';
				setCoversorText(coversorText.replace(e, `${item} ${newColor}`));
			}
		});
	};

	const selectColor = (e: any) => {
		const target = e.target;
		const newColor = target.tagName === 'BUTTON' ? getComputedStyle(e.target).backgroundColor : target.value;
		if (!itemSelected) return;
		changeColor(`--${itemSelected}:`, newColor);
	};

	const changeRadius = (value: string) => {
		console.log(value);
		coversorText.split('\n').forEach((e) => {
			if (e.includes('radius')) {
				setCoversorText(coversorText.replace(e, `--radius: ${value}rem;`));
				setRadius(value);
			}
		});
	};

	const changeTheme = (value: string, key: string) => {
		setCoversorText(value);
		setSelectTheme(key);
	};

	const deeps = ['background', 'card', 'popover', 'primary', 'secondary', 'accent', 'muted', 'destructive'];
	const outhers = ['input', 'border', 'ring', 'chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'];

	return (
		<>
			{/* Adiciona o CSS dinâmico ao DOM */}
			<style>{dynamicCSS}</style>

			<Sidebar>
				<SidebarHeader>
					<h3 className='Text-xl text-sidebar-foreground font-semibold'>Shadcn Theme Generator</h3>
				</SidebarHeader>
				<SidebarContent className='scroll'>
					<SidebarGroup>
						<SidebarGroupLabel>Colors</SidebarGroupLabel>
						<div className='grid grid-cols-4 gap-2'>
							{deeps.map((item, index) => (
								<SideBarItemColor key={index + item} item={item} ItemSelected={itemSelected} selectColor={selectColor} setItemSelected={setItemSelected} />
							))}
						</div>
					</SidebarGroup>

					<SidebarGroup>
						<SidebarGroupLabel>Outher Colors</SidebarGroupLabel>
						<div className='grid grid-cols-4 gap-2'>
							{outhers.map((item, index) => (
								<SideBarOutherColor key={index + item} item={item} ItemSelected={itemSelected} selectColor={selectColor} setItemSelected={setItemSelected} />
							))}
						</div>
					</SidebarGroup>

					<SidebarGroup>
						<SidebarGroupLabel>Radius</SidebarGroupLabel>
						<div className='flex gap-1'>
							<Button variant='outline' className={radius === '0' ? 'ring-ring ring' : 'scale-90'} onClick={() => changeRadius('0')}>
								0.00
							</Button>
							<Button variant='outline' className={radius === '0.25' ? 'ring-ring ring' : 'scale-90'} onClick={() => changeRadius('0.25')}>
								0.25
							</Button>
							<Button variant='outline' className={radius === '0.5' ? 'ring-ring ring' : 'scale-90'} onClick={() => changeRadius('0.5')}>
								0.50
							</Button>
							<Button variant='outline' className={radius === '0.75' ? 'ring-ring ring' : 'scale-90'} onClick={() => changeRadius('0.75')}>
								0.75
							</Button>
							<Button variant='outline' className={radius === '1' ? 'ring-ring ring' : 'scale-90'} onClick={() => changeRadius('1')}>
								1.00
							</Button>
						</div>
					</SidebarGroup>

					<SidebarGroup>
						<SidebarGroupLabel className='hover:text-muted-foreground cursor-pointer duration-300' onClick={() => setCollapseThemes(!collapseThemes)}>
							Themes {collapseThemes ? <ChevronRightIcon /> : <ChevronDownIcon />}
						</SidebarGroupLabel>
						<div className={`grid grid-cols-3 gap-x-1 overflow-hidden duration-500 ease-in-out ${collapseThemes ? 'max-h-0' : 'max-h-100'}`}>
							{Object.entries(Themes).map(([key, value]) => {
								return (
									<Button
										key={key}
										title={key}
										variant='ghost'
										size='sm'
										className={`w-full justify-start text-xs capitalize ${selectTheme === key ? 'bg-accent text-accent-foreground' : ''}`}
										onClick={() => changeTheme(value, key)}>
										{key}
									</Button>
								);
							})}
						</div>
					</SidebarGroup>

					<SidebarGroup className='space-y-2'>
						<SidebarGroupLabel>
							Editor{' '}
							<div className='ml-auto flex w-max items-center gap-2'>
								{copy && <p className='text-muted-foreground text-sm'>Texto Copiado</p>}
								<Button variant='ghost' className='w-max' onClick={copyText}>
									<Copy />
								</Button>
							</div>
						</SidebarGroupLabel>
						{/* <Textarea placeholder='CSS DaisyUI' className='scroll h-70' onChange={(e) => setOriginText(e.target.value)} spellCheck='false' />
						<div className='flex items-center justify-between gap-2'>
							<Button onClick={convertText} className='flex items-center gap-2' disabled={!originText}>
								Converter <SwitchCamera size={15} />
							</Button>
							{copy && <MutedText>Texto Copiado</MutedText>}
							<Button variant='ghost' className='w-max' onClick={copyText}>
								<Copy />
							</Button>
							</div> */}

						<Textarea className='scroll h-70' value={coversorText} onChange={(e) => setCoversorText(e.target.value)} spellCheck='false' />
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</>
	);
};

export default SideBar;
