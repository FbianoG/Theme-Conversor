'use client';
import { useEffect, useState } from 'react';

import SubTitle from './SubTitle';
import { Textarea } from './ui/textarea';
import { Copy, SwitchCamera } from 'lucide-react';
import MutedText from './MutedText';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Label } from './ui/label';

interface ColorItem {
	key: string;
	value: string;
}

const SideBar = () => {
	const [originText, setOriginText] = useState<string>('');

	const [coversorText, setCoversorText] = useState<string>(
		':root {--card: oklch(24% 0.023 329.708);\n--background: oklch(21% 0.021 329.708);\n--popover: oklch(16% 0.019 329.708);\n--foreground: oklch(72.354% 0.092 79.129);\n--primary: oklch(71.996% 0.123 62.756);\n--primary-foreground: oklch(14.399% 0.024 62.756);\n--secondary: oklch(14.399% 0.024 62.756/0.5);\n--secondary-foreground: oklch(71.996% 0.123 62.756);\n--accent: oklch(0.374 0.01 67.558);\n--accent-foreground: oklch(0.869 0.005 56.366);\n--muted: oklch(72.354% 0.092 79.129/0.1);\n--muted-foreground: oklch(72.354% 0.092 79.129/0.5);\n--chart-1: oklch(79.49% 0.063 184.558);\n--chart-3: oklch(74.722% 0.072 131.116);\n--chart-4: oklch(77.318% 0.128 31.871);\n--chart-2: oklch(88.15% 0.14 87.722);\n--chart-5: oklch(72.354% 0.092 79.129/0.3);\n--destructive: oklch(77.318% 0.128 31.871);\n--destructive-foreground: oklch(15.463% 0.025 31.871);\n--radius: 0.5rem;\n--card-foreground: oklch(72.354% 0.092 79.129);\n--popover-foreground: oklch(72.354% 0.092 79.129);\n--border: oklch(72.354% 0.092 79.129/0.1);\n--input: oklch(72.354% 0.092 79.129/0.3);\n--ring: oklch(71.996% 0.123 62.756/0.5);}',
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

		const newObj = filteredObj.map((item) => {
			if (item.key === 'color-base-100') item.key = 'color-card';
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

		setCoversorText(cssResult);
		// Atualiza o CSS dinâmico
	};

	const copyText = () => {
		navigator.clipboard.writeText(coversorText);
		setCopy(true);
	};

	useEffect(() => {
		if (coversorText) setDynamicCSS(coversorText);
		const radius = coversorText.split('\n').find((e) => e.includes('radius'));
		setRadius(radius?.split(':')[1].trim().replace('rem;', ''));
		// else return
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
				// const originColor = e.split(':')[1].trim();
				newColor = newColor + ';';
				setCoversorText(coversorText.replace(e, `${item} ${newColor}`));
			}
		});

		// console.log(coversorText);
	};

	const selectColor = (e: any) => {
		const newColor = getComputedStyle(e.target).backgroundColor;
		if (!itemSelected) return;
		changeColor(`--${itemSelected}:`, newColor);
	};

	const changeRadius = (value: string) => {
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

			<div className='scroll bg-card  relative h-screen w-93 overflow-y-auto p-4'>
				<SubTitle>Conversor DaisyUI x Shadcn</SubTitle>


				{/* Select */}
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
				{/* Colors */}
				<div className='bg-card mx-auto flex flex-wrap gap-2 rounded p-4'>
					<div className='flex flex-col gap-1'>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-slate-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-gray-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-zinc-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-neutral-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-stone-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-red-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-orange-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-amber-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-yellow-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-lime-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-green-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-emerald-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-teal-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-cyan-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-sky-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-blue-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-indigo-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-violet-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-purple-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-fuchsia-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-pink-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
					<div className='flex flex-col gap-1'>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-50 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-100 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-200 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-300 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-400 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-500 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-600 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-700 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-800 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-900 duration-150 hover:scale-110' onClick={selectColor}></button>
						<button title='' className='h-5 w-5 cursor-pointer rounded-full border border-[#0003] bg-rose-950 duration-150 hover:scale-110' onClick={selectColor}></button>
					</div>
				</div>
				{/* Radius */}
				<div className='flex flex-col items-center gap-2 mb-4'>
					<Label>Radius</Label>
					<div className='flex w-full justify-evenly gap-1'>
						<Button variant='outline' className={radius === '0' ? 'ring-ring ring' : ''} onClick={() => changeRadius('0')}>
							0.00
						</Button>
						<Button variant='outline' className={radius === '0.25' ? 'ring-ring ring' : ''} onClick={() => changeRadius('0.25')}>
							0.25
						</Button>
						<Button variant='outline' className={radius === '0.5' ? 'ring-ring ring' : ''} onClick={() => changeRadius('0.5')}>
							0.50
						</Button>
						<Button variant='outline' className={radius === '0.75' ? 'ring-ring ring' : ''} onClick={() => changeRadius('0.75')}>
							0.75
						</Button>
						<Button variant='outline' className={radius === '1' ? 'ring-ring ring' : ''} onClick={() => changeRadius('1')}>
							1.00
						</Button>
					</div>
				</div>
				{/* Converter */}
				<div className='flex flex-col gap-2'>
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
				</div>
			</div>
		</>
	);
};

export default SideBar;
