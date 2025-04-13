
import Link from 'next/link';

import { HelpCircle} from 'lucide-react';
import { Button } from '../ui/button';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

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
						Caso queria criar um Dark Theme, basta trocar o nome <span className='bg-muted rounded px-2'>:root</span> por <span className='bg-muted rounded px-2'>.dark </span>e
						substituir seu <span className='bg-muted rounded px-2'>.dark</span> original.
					</p>
				</div>

				<div>
					<h6 className='text-primary font-medium'>Observação:</h6>
					<p className='text-sm'>Você pode alterar o CSS gerado, isso ajudará você a ver como ficará seu tema em seus componentes Shadcn. </p>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default Helper;
