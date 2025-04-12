import Image from 'next/image';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Chart } from '@/components/Chart';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import Card from '@/components/Card';
import SubTitle from '@/components/SubTitle';
import MutedText from '@/components/MutedText';
import Chart2 from '@/components/Chart2';
import Chart3 from '@/components/Chart3';
import { Carousel } from '@/components/Carousel';
import { Dropdown } from '@/components/Dropdown';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/Drawer';

const Components = () => {
	return (
		<div className='flex max-h-screen flex-wrap gap-5 flex-1 overflow-y-auto justify-evenly items-center border p-10'>
			<Card className='relative w-75 space-y-2'>
				<SubTitle>Text + Background</SubTitle>
				<div className='flex flex-col gap-2'>
					<p className='text-primary w-max rounded px-2 font-semibold'>Primary</p>
					<p className='text-foreground w-max rounded px-2'>Foreground</p>
					<p className='bg-card text-card-foreground w-max rounded px-2'>Card-Foreground</p>
					<p className='bg-muted text-muted-foreground w-max rounded px-2'>Muted-Foreground</p>
					<p className='bg-accent text-accent-foreground w-max rounded px-2'>Accent-Foreground</p>
					<p className='bg-popover text-popover-foreground w-max rounded px-2'>Popover-Foreground</p>
				</div>
				<Button variant='ghost' className='absolute top-2 right-2 p-0'>
					<X size={10} />
				</Button>
			</Card>

			<Card className='relative w-75 space-y-3'>
				<Button variant='ghost' className='absolute top-2 right-2 p-0'>
					<X size={10} />
				</Button>

				<SubTitle>Button and Badge</SubTitle>
				<div className='flex gap-2'>
					<Badge>Default</Badge>
					<Badge variant='secondary'>Badge</Badge>
					<Badge variant='outline'>Badge</Badge>
					<Badge variant='destructive'>Badge</Badge>
				</div>
				<div className='flex w-full flex-wrap justify-between gap-2 p-2'>
					<Button>Default</Button>
					<Button disabled>Default</Button>
					<Button variant='secondary'>Secondary</Button>
					<Button disabled variant='secondary'>
						Secondary
					</Button>
					<Button variant='outline'>Outline</Button>
					<Button disabled variant='outline'>
						Outline
					</Button>
					<Button variant='ghost'>Ghost</Button>
					<Button disabled variant='ghost'>
						Ghost
					</Button>
					<Button variant='destructive'>Destructive</Button>
					<Button disabled variant='destructive'>
						Destructive
					</Button>
				</div>
			</Card>

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
				<SubTitle>Switch and Hover</SubTitle>
				<div className='flex flex-col items-center gap-2'>
					<div className='hover:bg-muted flex items-center gap-1 rounded p-2 duration-300'>
						<div className='flex flex-col'>
							<h5 className=''>Works</h5>
							<p className='text-muted-foreground text-xs leading-3.5'>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
						<Switch />
					</div>
					<div className='bg-muted flex items-center gap-1 rounded p-2 duration-300 hover:bg-transparent'>
						<div className='flex flex-col'>
							<h5 className=''>Sports</h5>
							<p className='text-muted-foreground text-xs leading-3.5'>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
						<Switch checked />
					</div>
					<div className='hover:bg-muted flex items-center gap-1 rounded p-2 duration-300'>
						<div className='flex flex-col'>
							<h5 className=''>Flamengo</h5>
							<p className='text-muted-foreground text-xs leading-3.5'>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
						<Switch checked disabled />
					</div>
				</div>
			</Card>

			<Card className='w-75 space-y-2'>
				<SubTitle>CheckBox, Ring and Slider</SubTitle>
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

				<Textarea placeholder='Escreva aqui' className='ring-ring/50 border-ring  ring-[3px]' />

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

						<Dropdown />
					</div>
					<div className='flex w-full items-center gap-2'>
						<div className='h-12 w-12 overflow-hidden rounded-full shadow'>
							<img src='https://placehold.co/50' alt='' className='h-full w-full' />
						</div>

						<div>
							<h6 className='text-sm'>Giovanna Salles</h6>
							<MutedText className='text-xs'>Namorada</MutedText>
						</div>

						<Dropdown />
					</div>
					<Drawer />
				</div>
			</Card>

			<Calendar mode='single' className='bg-popover w-max rounded-md border' />

			<Chart />
			<Chart2 />
			<Chart3 />

			<Carousel />
		</div>
	);
};

export default Components;
