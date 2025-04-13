import Link from 'next/link';

import { Github, HelpCircle } from 'lucide-react';
import { Button } from '../ui/button';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';

const Helper = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button title='Help' variant='ghost' size='icon' className='fixed top-2 right-4 z-50 p-0'>
					<HelpCircle />
				</Button>
			</DialogTrigger>
			<DialogContent className='w-150'>
				<DialogHeader>
					<DialogTitle>Como Usar?</DialogTitle>
				</DialogHeader>

				<div>
					<h6 className='text-card-foreground font-medium'>1. Escolha seu tema:</h6>
					<p className='text-card-foreground text-sm'>Use o seletor para customizar as cores do seu tema como preferir.</p>
				</div>

				<div>
					<h6 className='text-card-foreground font-medium'>2. Copie o CSS gerado:</h6>
					<p className='text-card-foreground text-sm'>Copie o CSS gerado ao final do barra lateral.</p>
				</div>

				<div>
					<h6 className='text-card-foreground font-medium'>3. Atualize seu CSS:</h6>
					<p className='text-card-foreground text-sm'>
						Com o CSS copiado, cole no seu arquivo <span className='bg-muted rounded px-2'>globals.css</span>, substituindo o<span className='bg-muted rounded px-2'>:root</span>{' '}
						original.
					</p>

					<p className='text-card-foreground text-sm'>
						Caso queria criar um Dark Theme, basta trocar o nome <span className='bg-muted rounded px-2'>:root</span> por <span className='bg-muted rounded px-2'>.dark</span> e
						substituir seu <span className='bg-muted rounded px-2'>.dark</span> original.
					</p>
				</div>

				<div>
					<h6 className='text-card-foreground font-medium'>Observação:</h6>
					<p className='text-card-foreground text-sm'>
						Não é gerado cores para o <span className='bg-muted rounded px-2'>--sidebar</span>. O ideal é você configurar seu{' '}
						<span className='bg-muted rounded px-2'>@Theme inline</span> para o <span className='bg-muted rounded px-2'>--sidebar</span> puxar cores de outras variáves.
					</p>
					<p className='text-card-foreground text-sm'>
						Ex: <span className='bg-muted rounded px-2'>--color-sidebar: var(--card);</span>.
					</p>
				</div>
				<DialogFooter className='sm:justify-start'>
					<DialogDescription>Acesse:</DialogDescription>
					<Link target='_blank' href='https://github.com/FbianoG/Theme-Conversor' className='hover:text-muted-foreground block duration-300'>
						<Github size={25} />
					</Link>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default Helper;
