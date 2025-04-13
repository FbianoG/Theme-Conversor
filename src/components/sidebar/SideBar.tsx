'use client';
import { useEffect, useState } from 'react';

import { Copy, SwitchCamera } from 'lucide-react';
import MutedText from '../shared/MutedText';
import { Button } from '../ui/button';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader } from '../ui/sidebar';
import { Textarea } from '../ui/textarea';
import SidebarColors from './SideBarColors';
import SideBarSelect from './SideBarSelect';

interface ColorItem {
	key: string;
	value: string;
}

const SideBar = () => {
	const [originText, setOriginText] = useState<string>('');

	const [coversorText, setCoversorText] = useState<string>(
		':root {\n--card: oklch(100% 0 0);\n--background: oklch(93% 0 0);\n--popover: oklch(86% 0 0);\n--foreground: oklch(35.519% 0.032 262.988);\n--primary: oklch(76.662% 0.135 153.45);\n--primary-foreground: oklch(33.387% 0.04 162.24);\n--secondary: oklch(33.387% 0.04 162.24/0.5);\n--secondary-foreground: oklch(76.662% 0.135 153.45);\n--accent: oklch(0.923 0.003 48.717);\n--accent-foreground: oklch(0% 0 0);\n--muted: oklch(35.519% 0.032 262.988/0.1);\n--muted-foreground: oklch(35.519% 0.032 262.988/0.5);\n--chart-1: oklch(72.06% 0.191 231.6);\n--chart-3: oklch(64.8% 0.15 160);\n--chart-4: oklch(71.76% 0.221 22.18);\n--chart-2: oklch(84.71% 0.199 83.87);\n--chart-5: oklch(35.519% 0.032 262.988/0.3);\n--destructive: oklch(71.76% 0.221 22.18);\n--destructive-foreground: oklch(0% 0 0);\n--radius: 0.5rem;\n--card-foreground: oklch(35.519% 0.032 262.988);\n--popover-foreground: oklch(35.519% 0.032 262.988);\n--border: oklch(35.519% 0.032 262.988/0.1);\n--input: oklch(35.519% 0.032 262.988/0.3);\n--ring: oklch(76.662% 0.135 153.45/0.5);}',
	);
	const [copy, setCopy] = useState<boolean>(false);

	// Estado para armazenar o CSS dinâmico
	const [dynamicCSS, setDynamicCSS] = useState<string>('');

	const [itemSelected, setitemSelected] = useState<string>('');

	const [radius, setRadius] = useState<string>();

	const convertText = () => {
		const obj: ColorItem[] = originText
			.split('--')
			.filter(Boolean)
			.map((item) => {
				const [key, value] = item.split(':').map((str) => str.trim());
				return { key, value };
			});

		const filteredObj = obj.filter((item) => item.key && item.key !== 'color-info-content' && item.key !== 'radius-selector' && item.key !== 'radius-field');

		const newObj: ColorItem[] = filteredObj.map((item) => {
			if (item.key === 'color-base-100') {
				item.key = 'color-card';
			}
			if (item.key === 'color-base-200') item.key = 'color-background';
			if (item.key === 'color-base-300') item.key = 'color-popover';
			if (item.key === 'color-base-content') item.key = 'color-foreground';
			if (item.key === 'color-primary-content') item.key = 'color-primary-foreground';
			if (item.key === 'color-accent-content') item.key = 'color-accent-foreground';
			if (item.key === 'size-selector') {
				const selectColor = obj.find((e) => e.key === 'color-foreground');
				if (selectColor) {
					item.value = selectColor.value;
					item.key = 'color-card-foreground';
				}
			}
			if (item.key === 'size-field') {
				const selectColor = obj.find((e) => e.key === 'color-foreground');
				if (selectColor) {
					item.value = selectColor.value;
					item.key = 'color-popover-foreground';
				}
			}
			if (item.key === 'color-secondary') {
				const selectColor = obj.find((e) => e.key === 'color-primary-foreground');
				if (selectColor) {
					item.value = selectColor.value.slice(0, -2) + '/0.5);';
				}
			}
			if (item.key === 'color-secondary-content') {
				const selectColor = obj.find((e) => e.key === 'color-primary');
				if (selectColor) {
					item.value = selectColor.value;
					item.key = 'color-secondary-foreground';
				}
			}
			if (item.key === 'color-neutral') {
				const selectColor = obj.find((e) => e.key === 'color-foreground');
				if (selectColor) {
					item.value = selectColor.value.slice(0, -2) + '/0.1);';
					item.key = 'color-muted';
				}
			}
			if (item.key === 'color-neutral-content') {
				const selectColor = obj.find((e) => e.key === 'color-foreground');
				if (selectColor) {
					item.value = selectColor.value.slice(0, -2) + '/0.5);';
					item.key = 'color-muted-foreground';
				}
			}
			if (item.key === 'border') {
				const selectColor = obj.find((e) => e.key === 'color-foreground');
				if (selectColor) {
					item.value = selectColor.value.slice(0, -2) + '/0.1);';
				}
			}
			if (item.key === 'depth') {
				const selectColor = obj.find((e) => e.key === 'color-foreground');
				if (selectColor) {
					item.value = selectColor.value.slice(0, -2) + '/0.3);';
					item.key = 'input';
				}
			}
			if (item.key === 'noise') {
				const selectColor = obj.find((e) => e.key === 'color-primary');
				if (selectColor) {
					item.value = selectColor.value.slice(0, -2) + '/0.5);';
					item.key = 'ring';
				}
			}
			if (item.key === 'radius-box') {
				item.key = 'radius';
				setRadius(item.value.replace('rem', ''));
			}
			if (item.key === 'color-info') item.key = 'chart-1';
			if (item.key === 'color-warning') item.key = 'chart-2';
			if (item.key === 'color-success') item.key = 'chart-3';
			if (item.key === 'color-success-content') {
				const selectColor = obj.find((e) => e.key === 'color-error');
				if (selectColor) {
					item.value = selectColor.value;
					item.key = 'chart-4';
				}
			}
			if (item.key === 'color-warning-content') {
				const selectColor = obj.find((e) => e.key === 'color-foreground');
				if (selectColor) {
					item.value = selectColor.value.slice(0, -2) + '/0.3);';
					item.key = 'chart-5';
				}
			}
			if (item.key === 'color-error') item.key = 'color-destructive';
			if (item.key === 'color-error-content') item.key = 'color-destructive-foreground';
			return item;
		});

		const cssVariables = newObj.map(({ key, value }) => `--${key.replace('color-', '')}: ${value}`).join('\n');

		const cssResult = `:root {\n${cssVariables}}`;

		// Atualiza o CSS dinâmico
		setCoversorText(cssResult);
	};

	const copyText = () => {
		navigator.clipboard.writeText(coversorText);
		setCopy(true);
	};

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

	return (
		<>
			{/* Adiciona o CSS dinâmico ao DOM */}
			<style>{dynamicCSS}</style>

			<Sidebar>
				<SidebarHeader>
					<h3 className='Text-xl text-sidebar-foreground font-semibold'>Theme Conversor</h3>
				</SidebarHeader>
				<SidebarContent className='scroll'>
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
						<SidebarGroupLabel>Conversor</SidebarGroupLabel>
						<Textarea placeholder='CSS DaisyUI' className='scroll h-70' onChange={(e) => setOriginText(e.target.value)} spellCheck='false' />
						<div className='flex items-center justify-between gap-2'>
							<Button onClick={convertText} className='flex items-center gap-2' disabled={!originText}>
								Converter <SwitchCamera size={15} />
							</Button>
							{copy && <MutedText>Texto Copiado</MutedText>}
							<Button variant='ghost' className='w-max' onClick={copyText}>
								<Copy />
							</Button>
						</div>
						<Textarea className='scroll h-70' value={coversorText} onChange={(e) => setCoversorText(e.target.value)} spellCheck='false' />
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</>
	);
};

export default SideBar;
