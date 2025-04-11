'use client';
import { useEffect, useState } from 'react';

import Button from './Button';
import Card from './Card';
import SubTitle from './SubTitle';
import { Textarea } from './ui/textarea';
import { Copy, SwitchCamera } from 'lucide-react';
import MutedText from './MutedText';

interface ColorItem {
	key: string;
	value: string;
}

const Conversor = () => {
	const [originText, setOriginText] = useState<string>('');
	const [coversorText, setCoversorText] = useState<string>('');
	const [copy, setCopy] = useState<boolean>(false);

	// Estado para armazenar o CSS dinâmico
	const [dynamicCSS, setDynamicCSS] = useState<string>('');

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

		const cssVariables = newObj.map(({ key, value }) => `   --${key.replace('color-', '')}: ${value}`).join('\n');

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
		else setDynamicCSS('');
	}, [coversorText]);

	useEffect(() => {
		if (copy)
			setTimeout(() => {
				setCopy(false);
			}, 4000);
	}, [copy]);

	return (
		<>
			{/* Adiciona o CSS dinâmico ao DOM */}
			<style>{dynamicCSS}</style>

			<Card className='mx-auto my-10 w-260 space-y-2'>
				<SubTitle>Conversor DaisyUI x Shadcn</SubTitle>

				<div className='flex gap-2'>
					<Textarea className='h-140' onChange={(e) => setOriginText(e.target.value)} spellCheck='false' />
					<div className='flex flex-col items-center justify-between gap-2'>
						<Button onClick={convertText} className='flex items-center gap-2'>
							Converter <SwitchCamera size={15} />
						</Button>
						{copy && <MutedText className='mt-auto text-green-500'>Texto Copiado</MutedText>}
						<Button variant='ghost' className='w-max' onClick={copyText}>
							<Copy />
						</Button>
					</div>
					<Textarea className='h-140' value={coversorText} onChange={(e) => setCoversorText(e.target.value)} spellCheck='false' />
				</div>
			</Card>
		</>
	);
};

export default Conversor;
