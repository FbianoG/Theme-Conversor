import Link from 'next/link';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Pricing from './Pricing';
import Image from 'next/image';
import { ChevronsUpDown, Cpu, LayoutGridIcon, Zap } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select } from '@radix-ui/react-select';
import { SelectContent,  SelectItem,  SelectTrigger, SelectValue } from './ui/select';

const Preview = () => {
	const links = [
		{
			group: 'Product',
			items: [
				{
					title: 'Features',
					href: '#',
				},
				{
					title: 'Solution',
					href: '#',
				},
				{
					title: 'Customers',
					href: '#',
				},
				{
					title: 'Pricing',
					href: '#',
				},
				{
					title: 'Help',
					href: '#',
				},
				{
					title: 'About',
					href: '#',
				},
			],
		},
		{
			group: 'Solution',
			items: [
				{
					title: 'Startup',
					href: '#',
				},
				{
					title: 'Freelancers',
					href: '#',
				},
				{
					title: 'Organizations',
					href: '#',
				},
				{
					title: 'Students',
					href: '#',
				},
				{
					title: 'Collaboration',
					href: '#',
				},
				{
					title: 'Design',
					href: '#',
				},
				{
					title: 'Management',
					href: '#',
				},
			],
		},
		{
			group: 'Company',
			items: [
				{
					title: 'About',
					href: '#',
				},
				{
					title: 'Careers',
					href: '#',
				},
				{
					title: 'Blog',
					href: '#',
				},
				{
					title: 'Press',
					href: '#',
				},
				{
					title: 'Contact',
					href: '#',
				},
				{
					title: 'Help',
					href: '#',
				},
			],
		},
		{
			group: 'Legal',
			items: [
				{
					title: 'Licence',
					href: '#',
				},
				{
					title: 'Privacy',
					href: '#',
				},
				{
					title: 'Cookies',
					href: '#',
				},
				{
					title: 'Security',
					href: '#',
				},
			],
		},
	];

	return (
		<div className='h-screen flex-1 space-y-10 overflow-y-auto'>
			<header className='flex items-center justify-between border-b px-20 py-6'>
				<Link href='/' className='text-foreground inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl' aria-label='logo'>
					<svg width='95' height='94' viewBox='0 0 95 94' className='text-primary h-auto w-6' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path d='M96 0V47L48 94H0V47L48 0H96Z' />
					</svg>
					Flowrift
				</Link>

				<nav className='hidden gap-12 lg:flex'>
					<a className='hover:text-primary text-foreground transition duration-100'>Home</a>
					<a className='text-primary inline-flex items-center gap-1 text-lg font-semibold'>
						Features
						<svg xmlns='http://www.w3.org/2000/svg' className='text-foreground h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</a>
					<a className='hover:text-primary text-foreground transition duration-100'>Pricing</a>
					<a className='hover:text-primary text-foreground transition duration-100'>About</a>
				</nav>

				<div className='-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start'>
					<Button variant='ghost'>Sign up</Button>
					<Button variant='default'>Login</Button>
				</div>
			</header>

			<section className='flex flex-col items-center'>
				<div className='bg-muted text-muted-foreground flex items-center gap-2 rounded border p-2'>
					<Badge variant='secondary'>New</Badge>

					<span className='text-sm'>This is a section of some simple filler text.</span>

					<a className='text-primary hover:text-primary/80 text-sm font-bold transition duration-100'>More</a>
				</div>

				<div className='flex max-w-xl flex-col items-center pt-8 pb-0 text-center sm:pb-16 lg:pt-32 lg:pb-32'>
					<p className='text-primary mb-4 font-semibold md:mb-6 md:text-lg xl:text-xl'>Very proud to introduce</p>

					<h1 className='text-foreground mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl'>Revolutionary way to build the web</h1>

					<p className='text-muted-foreground mb-8 leading-relaxed md:mb-12 xl:text-lg'>
						This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.
					</p>

					<div className='flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center'>
						<Button size='lg'>Start Now</Button>
						<Button size='lg' variant='secondary'>
							Take tour
						</Button>
					</div>
				</div>
			</section>

			<section className='mb-45'>
				<div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
					<h2 className='relative z-10 max-w-xl text-4xl font-medium lg:text-5xl'>The Lyra ecosystem brings together our models.</h2>
					<div className='relative'>
						<div className='relative z-10 space-y-4 md:w-1/2'>
							<p className='text-body'>
								Lyra is evolving to be more than just the models. <span className='text-title font-medium'>It supports an entire ecosystem</span> — from products innovate.
							</p>
							<p>It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

							<div className='grid grid-cols-2 gap-3 pt-6 sm:gap-4'>
								<div className='space-y-3'>
									<div className='flex items-center gap-2'>
										<Zap className='size-4' />
										<h3 className='text-sm font-medium'>Faaast</h3>
									</div>
									<p className='text-muted-foreground text-sm'>It supports an entire helping developers and innovate.</p>
								</div>
								<div className='space-y-2'>
									<div className='flex items-center gap-2'>
										<Cpu className='size-4' />
										<h3 className='text-sm font-medium'>Powerful</h3>
									</div>
									<p className='text-muted-foreground text-sm'>It supports an entire helping developers and businesses.</p>
								</div>
							</div>
						</div>
						<div className='mt-12 h-max md:absolute md:inset-x-0 md:-inset-y-12 md:mt-0'>
							<div aria-hidden className='to-background absolute inset-0 z-1 hidden bg-linear-to-l from-transparent to-55% md:block'></div>
							<div className='border-border/50 relative h-75 overflow-hidden rounded-2xl border border-dotted p-2'>
								<Image src='/techno.jpg' className='hidden h-full rounded-[12px] object-cover dark:block' alt='payments illustration dark' width={1207} height={929} />
								<Image src='/techno.jpg' className='h-full rounded-[12px] object-cover shadow dark:hidden' alt='payments illustration light' width={1207} height={929} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<Pricing />

			<footer className='bg-card border-b pt-8 dark:bg-transparent'>
				<div className='mb-8 border-b md:mb-12'>
					<div className='mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-6 pb-6'>
						<Link href='/' aria-label='go home' className='block size-fit'>
							<LayoutGridIcon />
						</Link>
						<div className='flex flex-wrap justify-center gap-6 text-sm'>
							<Link href='' aria-label='X/Twitter' className='text-muted-foreground hover:text-primary block duration-300'>
								<svg className='size-6' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z'></path>
								</svg>
							</Link>
							<Link href='' aria-label='LinkedIn' className='text-muted-foreground hover:text-primary block duration-300'>
								<svg className='size-6' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'></path>
								</svg>
							</Link>
							<Link href='' aria-label='Facebook' className='text-muted-foreground hover:text-primary block duration-300'>
								<svg className='size-6' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95'></path>
								</svg>
							</Link>
							<Link href='' aria-label='Threads' className='text-muted-foreground hover:text-primary block duration-300'>
								<svg className='size-6' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
									<path
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='1.5'
										d='M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4'
										color='currentColor'></path>
								</svg>
							</Link>
							<Link href='' aria-label='Instagram' className='text-muted-foreground hover:text-primary block duration-300'>
								<svg className='size-6' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3'></path>
								</svg>
							</Link>
							<Link href='' aria-label='TikTok' className='text-muted-foreground hover:text-primary block duration-300'>
								<svg className='size-6' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48'></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
				<div className='mx-auto max-w-5xl px-6'>
					<div className='grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4'>
						<div className='grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3'>
							{links.map((link, index) => (
								<div key={index} className='space-y-4 text-sm'>
									<span className='block font-medium'>{link.group}</span>
									{link.items.map((item, index) => (
										<Link key={index} href='' className='text-muted-foreground hover:text-primary block duration-300'>
											<span>{item.title}</span>
										</Link>
									))}
								</div>
							))}
						</div>
						<div className='row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1'>
							<div className='space-y-4'>
								<Label htmlFor='mail' className='block font-medium'>
									Newsletter
								</Label>
								<div className='flex gap-2'>
									<Input type='email' id='mail' name='mail' placeholder='Your email' className='h-8 text-sm' />
									<Button size='sm'>Submit</Button>
								</div>
								<span className='text-muted-foreground block text-sm'>Don t miss any update!</span>
							</div>
						</div>
					</div>
					<div className='mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6'>
						<small className='text-muted-foreground order-last block text-center text-sm md:order-first'>© {new Date().getFullYear()} Tailus UI, All rights reserved</small>
						<form action=''>
							<div className='relative'>
								<ChevronsUpDown className='pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75' size='0.75rem' />
								<Select>
									<SelectTrigger  className='w-full capitalize'>
										<SelectValue placeholder='Language'/>
									</SelectTrigger>
									<SelectContent className='capitalize'>
										<SelectItem  value='1'>English</SelectItem>
										<SelectItem value='2'>Espanol</SelectItem>
										<SelectItem value='3'>Français</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</form>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Preview;
