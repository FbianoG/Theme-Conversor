'use client';

import Components from '@/components/comps/Componets';
import Preview from '@/components/preview/Preview';
import Helper from '@/components/shared/Helper';
import SideBar from '@/components/sidebar/SideBar';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Eye } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
	// const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
		<SidebarProvider>
			<SideBar />
			<main className='w-full'>
				<SidebarTrigger className='sticky top-0' />
				<Button title='Preview' onClick={() => setPrev(!prev)} variant='ghost' size='icon' className='fixed top-12 right-4 p-0'>
					<Eye />
				</Button>
				<Helper />
				{prev ? <Preview /> : <Components />}
			</main>
		</SidebarProvider>
	);
}
