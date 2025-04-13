'use client';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader } from '../ui/sidebar';
import { Textarea } from '../ui/textarea';
import SidebarColors from './SideBarColors';
import SideBarSelect from './SideBarSelect';

import Themes from '@/utils/themes';

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

	const [itemSelected, setitemSelected] = useState<string>('');

	const [radius, setRadius] = useState<string>();

	// const convertText = () => {
	// 	const obj: ColorItem[] = originText
	// 		.split('--')
	// 		.filter(Boolean)
	// 		.map((item) => {
	// 			const [key, value] = item.split(':').map((str) => str.trim());
	// 			return { key, value };
	// 		});

	// 	const filteredObj = obj.filter((item) => item.key && item.key !== 'color-info-content' && item.key !== 'radius-selector' && item.key !== 'radius-field');

	// 	const newObj: ColorItem[] = filteredObj.map((item) => {
	// 		if (item.key === 'color-base-100') {
	// 			item.key = 'color-card';
	// 		}
	// 		if (item.key === 'color-base-200') item.key = 'color-background';
	// 		if (item.key === 'color-base-300') item.key = 'color-popover';
	// 		if (item.key === 'color-base-content') item.key = 'color-foreground';
	// 		if (item.key === 'color-primary-content') item.key = 'color-primary-foreground';
	// 		if (item.key === 'color-accent-content') item.key = 'color-accent-foreground';
	// 		if (item.key === 'size-selector') {
	// 			const selectColor = obj.find((e) => e.key === 'color-foreground');
	// 			if (selectColor) {
	// 				item.value = selectColor.value;
	// 				item.key = 'color-card-foreground';
	// 			}
	// 		}
	// 		if (item.key === 'size-field') {
	// 			const selectColor = obj.find((e) => e.key === 'color-foreground');
	// 			if (selectColor) {
	// 				item.value = selectColor.value;
	// 				item.key = 'color-popover-foreground';
	// 			}
	// 		}
	// 		if (item.key === 'color-secondary') {
	// 			const selectColor = obj.find((e) => e.key === 'color-primary-foreground');
	// 			if (selectColor) {
	// 				item.value = selectColor.value.slice(0, -2) + '/0.5);';
	// 			}
	// 		}
	// 		if (item.key === 'color-secondary-content') {
	// 			const selectColor = obj.find((e) => e.key === 'color-primary');
	// 			if (selectColor) {
	// 				item.value = selectColor.value;
	// 				item.key = 'color-secondary-foreground';
	// 			}
	// 		}
	// 		if (item.key === 'color-neutral') {
	// 			const selectColor = obj.find((e) => e.key === 'color-foreground');
	// 			if (selectColor) {
	// 				item.value = selectColor.value.slice(0, -2) + '/0.1);';
	// 				item.key = 'color-muted';
	// 			}
	// 		}
	// 		if (item.key === 'color-neutral-content') {
	// 			const selectColor = obj.find((e) => e.key === 'color-foreground');
	// 			if (selectColor) {
	// 				item.value = selectColor.value.slice(0, -2) + '/0.5);';
	// 				item.key = 'color-muted-foreground';
	// 			}
	// 		}
	// 		if (item.key === 'border') {
	// 			const selectColor = obj.find((e) => e.key === 'color-foreground');
	// 			if (selectColor) {
	// 				item.value = selectColor.value.slice(0, -2) + '/0.1);';
	// 			}
	// 		}
	// 		if (item.key === 'depth') {
	// 			const selectColor = obj.find((e) => e.key === 'color-foreground');
	// 			if (selectColor) {
	// 				item.value = selectColor.value.slice(0, -2) + '/0.3);';
	// 				item.key = 'input';
	// 			}
	// 		}
	// 		if (item.key === 'noise') {
	// 			const selectColor = obj.find((e) => e.key === 'color-primary');
	// 			if (selectColor) {
	// 				item.value = selectColor.value.slice(0, -2) + '/0.5);';
	// 				item.key = 'ring';
	// 			}
	// 		}
	// 		if (item.key === 'radius-box') {
	// 			item.key = 'radius';
	// 			setRadius(item.value.replace('rem', ''));
	// 		}
	// 		if (item.key === 'color-info') item.key = 'chart-1';
	// 		if (item.key === 'color-warning') item.key = 'chart-2';
	// 		if (item.key === 'color-success') item.key = 'chart-3';
	// 		if (item.key === 'color-success-content') {
	// 			const selectColor = obj.find((e) => e.key === 'color-error');
	// 			if (selectColor) {
	// 				item.value = selectColor.value;
	// 				item.key = 'chart-4';
	// 			}
	// 		}
	// 		if (item.key === 'color-warning-content') {
	// 			const selectColor = obj.find((e) => e.key === 'color-foreground');
	// 			if (selectColor) {
	// 				item.value = selectColor.value.slice(0, -2) + '/0.3);';
	// 				item.key = 'chart-5';
	// 			}
	// 		}
	// 		if (item.key === 'color-error') item.key = 'color-destructive';
	// 		if (item.key === 'color-error-content') item.key = 'color-destructive-foreground';
	// 		return item;
	// 	});

	// 	const cssVariables = newObj.map(({ key, value }) => `--${key.replace('color-', '')}: ${value}`).join('\n');

	// 	const cssResult = `:root {\n${cssVariables}}`;

	// 	// Atualiza o CSS dinâmico
	// 	setCoversorText(cssResult);
	// };

	// const copyText = () => {
	// 	navigator.clipboard.writeText(coversorText);
	// 	setCopy(true);
	// };

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

	const changeColor = (item: string, newColor: string) => {
		coversorText.split('\n').forEach((e) => {
			if (e.includes(item)) {
				newColor = newColor + ';';
				setCoversorText(coversorText.replace(e, `${item} ${newColor}`));
			}
		});
	};

	const selectColor = (e: any) => {
		const newColor = getComputedStyle(e.target).backgroundColor;
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

	const [selectTheme, setSelectTheme] = useState<string>('initial');

	const changeTheme = (value: string, key: string) => {
		setCoversorText(value);
		setSelectTheme(key);
	};

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
						<SidebarGroupLabel>Themes</SidebarGroupLabel>
						<div className='grid grid-cols-3 gap-x-1'>
							{Object.entries(Themes).map(([key, value]) => {
								return (
									<Button
										key={key}
										title={key}
										variant='ghost'
										size='sm'
										className={`w-full justify-start text-sm capitalize ${selectTheme === key ? 'bg-accent text-accent-foreground' : ''}`}
										onClick={() => changeTheme(value, key)}>
										{key}
									</Button>
								);
							})}
						</div>
					</SidebarGroup>
					<SidebarGroup>
						<SidebarGroupLabel>Colors</SidebarGroupLabel>
						<SideBarSelect setitemSelected={setitemSelected} />
						<SidebarColors selectColor={selectColor} />
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

					<SidebarGroup className='space-y-2'>
						<SidebarGroupLabel>Editor</SidebarGroupLabel>
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
