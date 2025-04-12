'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, HelpCircle, X } from 'lucide-react';
import Card from '@/components/Card';
import Conversor from '@/components/SideBar';
import SubTitle from '@/components/SubTitle';
import { Button } from '@/components/ui/button';
import Components from '@/components/Componets';
import Preview from '@/components/Preview';

export default function Home() {
	// const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const [helper, setHelper] = useState<boolean>(false);

	const [prev, setPrev] = useState<boolean>(false);

	// const changeDarkMode = () => {
	// 	if (document.documentElement.classList.contains('dark')) {
	// 		document.documentElement.classList.remove('dark');
	// 		localStorage.setItem('theme', 'light');
	// 		setTheme('light');
	// 	} else {
	// 		document.documentElement.classList.add('dark');
	// 		localStorage.setItem('theme', 'dark');
	// 		setTheme('dark');
	// 	}
	// };

	// useEffect(() => {
	// 	const theme = localStorage.getItem('theme');
	// 	if (theme === 'dark') {
	// 		document.documentElement.classList.add('dark');
	// 		setTheme('dark');
	// 	} else {
	// 		document.documentElement.classList.remove('dark');
	// 		setTheme('light');
	// 	}
	// }, []);

	return (
		<div className='flex'>
			{/* Float Buttons */}
			{/* <Button variant='ghost' className='fixed top-2 right-2 hidden p-0' onClick={changeDarkMode}>
				{theme === 'light' ? <Sun /> : <Moon />}
			</Button> */}

			<Button title='Help' variant='ghost' onClick={() => setHelper(true)} className='fixed top-2 left-94 p-0'>
				<HelpCircle />
			</Button>

			<Button title='Preview' onClick={() => setPrev(!prev)} variant='ghost' className='fixed top-12 left-94 p-0'>
				<Eye />
			</Button>
			{/* Helper */}
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

			<Conversor />

			{prev ? <Preview /> : <Components />}

			{/* <Pricing /> */}
		</div>
	);
}
