'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HelpCircle, Moon, Sun, X } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Chart } from '@/components/Chart';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Conversor from '@/components/Conversor';
import SubTitle from '@/components/SubTitle';
import MutedText from '@/components/MutedText';
import Dropdown from '@/components/Dropdown';

export default function Home() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const [helper, setHelper] = useState<boolean>(false);

	const changeDarkMode = () => {
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setTheme('light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
		}
	};

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			setTheme('dark');
		} else {
			document.documentElement.classList.remove('dark');
			setTheme('light');
		}
	}, []);

	return (
		<div className='flex min-h-screen flex-col px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32'>
			<Button variant='ghost' className='fixed top-2 right-2 hidden p-0' onClick={changeDarkMode}>
				{theme === 'light' ? <Sun /> : <Moon />}
			</Button>

			<Button variant='ghost' onClick={() => setHelper(true)} className='fixed top-2 left-2 p-0'>
				<HelpCircle />
			</Button>

			{helper && (
				<div className='fixed top-0 left-0 z-50 flex h-dvh w-dvw items-center justify-center'>
					<div className='absolute -z-10 h-full w-full bg-black/70'></div>
					<Card className='relative w-150 space-y-5'>
						<Button variant='ghost' onClick={() => setHelper(false)} className='absolute top-2 right-2 p-0'>
							<X />
						</Button>
						<SubTitle>Como Usar?</SubTitle>

						<div>
							<h6 className='text-primary font-medium'>1. Acesse:</h6>
							<Link target='_blank' href='https://daisyui.com/theme-generator/' className='text-sm hover:underline'>
								https://daisyui.com/theme-generator/
							</Link>
						</div>
						<div>
							<h6 className='text-primary font-medium'>2. Escolha seu tema:</h6>
							<p className='text-sm'>Use o seletor para customizar as cores do seu tema como preferir.</p>
						</div>

						<div>
							<h6 className='text-primary font-medium'>3. Copie o CSS gerado:</h6>
							<p className='text-sm'>
								Copie apenas as linhas que começam com <span className='bg-muted rounded px-2'>--</span> (variáveis CSS).
							</p>
							<p className='text-sm'>
								Ex: <span className='bg-muted rounded px-2'> --color-base-100: oklch(20.84% 0.008 17.911);</span>
							</p>
							<p className='text-sm'>
								Copie as as linhas que começam a partir do <span className='bg-muted rounded px-2'>--color-base-100</span> e vai até o{' '}
								<span className='bg-muted rounded px-2 text-nowrap'>--noise</span> no CSS gerado.
							</p>
						</div>

						<div>
							<h6 className='text-primary font-medium'>4. Cole no campo do nosso site:</h6>
							<p className='text-sm'>
								Volte ao nosso site e cole essas variáveis no <span className='bg-muted rounded px-2'>Texarea</span> ao final da página, depois clique em{' '}
								<span className='bg-muted rounded px-2'>“Converter”</span>
							</p>
							<p className='text-sm'>Ao lado irá gerar o CSS convertido para Shadcn.</p>
						</div>
						<div>
							<h6 className='text-primary font-medium'>5. Atualize seu CSS:</h6>
							<p className='text-sm'>
								Copie o <span className='bg-muted rounded px-2'>:root</span> gerado e cole no seu arquivo globals.css, substituindo o{' '}
								<span className='bg-muted rounded px-2'>:root</span> original.
							</p>

							<p className='text-sm'>
								Caso queria criar um Dark Theme, basta trocar o nome <span className='bg-muted rounded px-2'>:root</span> por{' '}
								<span className='bg-muted rounded px-2'>.dark </span>e substituir seu <span className='bg-muted rounded px-2'>.dark</span> original.
							</p>
						</div>

						<div>
							<h6 className='text-primary font-medium'>Observação:</h6>
							<p className='text-sm'>Você pode alterar o CSS gerado, isso ajudará você a ver como ficará seu tema em seus componentes Shadcn. </p>
						</div>
					</Card>
				</div>
			)}

			<Card className='mx-auto my-10 w-100'>
				<Accordion type='single' collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger>Is it styled?</AccordionTrigger>
						<AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-3'>
						<AccordionTrigger>Is it animated?</AccordionTrigger>
						<AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Card>

			<div className='flex flex-wrap items-center justify-center gap-4'>
				<Card className='w-75 space-y-2'>
					<SubTitle>Login</SubTitle>
					<div className='space-y-2'>
						<Label htmlFor='email'>Your email address</Label>
						<Input type='email' placeholder='Email' />
					</div>
					<div className='space-y-2'>
						<Label htmlFor='email'>Senha</Label>
						<Input type='email' placeholder='Password' />
					</div>
					<div className='mt-4 flex gap-2'>
						<Button variant='ghost' className='w-1/2'>
							Cancel
						</Button>
						<Button className='w-1/2'>Access</Button>
					</div>
				</Card>

				<Card className='group w-75 space-y-2'>
					<div className='relative h-38 w-full overflow-hidden rounded duration-300 group-hover:brightness-75'>
						<Image width={300} height={250} loading='lazy' alt='Image' src='/image.webp' className='duration-500 group-hover:scale-105' />
					</div>

					<div className='flex justify-between'>
						<span className='text-sm'>Nike</span>
						<Badge variant='secondary'>SALE</Badge>
					</div>

					<div className='flex items-center gap-2'>
						<h5 className='text-primary text-lg font-semibold'>
							R$389,<small className='text-xs'>90</small>
						</h5>
						<span className='text-muted-foreground text-xs line-through'>R$499,90</span>
					</div>
				</Card>

				<Card className='w-75 space-y-2'>
					<SubTitle>Configuration</SubTitle>
					<div className='flex flex-col items-center gap-2'>
						<div className='flex items-center gap-1'>
							<div className='flex flex-col'>
								<h5 className=''>Works</h5>
								<p className='text-muted-foreground text-xs leading-3.5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, provident?</p>
							</div>
							<Switch />
						</div>
						<div className='flex items-center gap-1'>
							<div className='flex flex-col'>
								<h5 className=''>Sports</h5>
								<p className='text-muted-foreground text-xs leading-3.5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, provident?</p>
							</div>
							<Switch checked />
						</div>
					</div>
				</Card>

				<Card className='w-75 space-y-2'>
					<SubTitle>Outhers</SubTitle>
					<div className='flex items-center space-x-2'>
						<Checkbox id='1' />
						<label htmlFor='1' className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Natação
						</label>
					</div>
					<div className='flex items-center space-x-2'>
						<Checkbox id='2' checked />
						<label htmlFor='2' className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Futebol
						</label>
					</div>
					<div className='mb-4 flex items-center space-x-2'>
						<Checkbox id='3' disabled />
						<label htmlFor='3' className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Basquete
						</label>
					</div>

					<Textarea placeholder='Escreva aqui' />

					<Slider defaultValue={[33]} max={100} step={1} className='my-8 w-full' />
				</Card>

				<Card className='w-75'>
					<SubTitle>Fabiano Gonçalves</SubTitle>
					<MutedText>Software Developer</MutedText>
					<div className='mt-4 space-y-2'>
						<h5>Friends</h5>
						<div className='flex w-full items-center gap-2'>
							<div className='h-12 w-12 overflow-hidden rounded-full shadow'>
								<img src='https://placehold.co/50' alt='' className='h-full w-full' />
							</div>

							<div>
								<h6 className='text-sm'>Giovanna Salles</h6>
								<MutedText className='text-xs'>Namorada</MutedText>
							</div>

							<Dropdown variant='outline' title='V' className='ml-auto'>
								<p>Mensagem</p>
								<p>Inativo</p>
								<p>Ligar</p>
							</Dropdown>
						</div>
						<div className='flex w-full items-center gap-2'>
							<div className='h-12 w-12 overflow-hidden rounded-full shadow'>
								<img src='https://placehold.co/50' alt='' className='h-full w-full' />
							</div>

							<div>
								<h6 className='text-sm'>Giovanna Salles</h6>
								<MutedText className='text-xs'>Namorada</MutedText>
							</div>

							<Dropdown variant='outline' title='V' className='ml-auto'>
								<p>Mensagem</p>
								<p>Inativo</p>
								<p>Ligar</p>
							</Dropdown>
						</div>
					</div>
				</Card>

				<Calendar mode='single' className='bg-popover w-max rounded-md border' />

				<Card className='relative w-75'>
					<Button variant='ghost' className='absolute top-2 right-2 p-0'>
						<X size={10} />
					</Button>
					<div className='flex gap-2'>
						<Badge>Default</Badge>
						<Badge variant='secondary'>Badge</Badge>
						<Badge variant='outline'>Badge</Badge>
						<Badge variant='destructive'>Badge</Badge>
					</div>
					<div className='grid'>
						<span className='text-primary'>Primary</span>
						<span>Foreground</span>
						<span className='text-muted-foreground'>Muted-Foreground</span>
					</div>
					<div className='flex w-full flex-wrap justify-center gap-2 p-2'>
						<Button>Default</Button>
						<Button variant='secondary'>Secondary</Button>
						<Button variant='ghost'>Ghost</Button>
						<Button variant='destructive'>Destructive</Button>
						<Button variant='outline'>Outline</Button>
					</div>
				</Card>

				<Chart />
			</div>

			<Conversor />
		</div>
	);
}
