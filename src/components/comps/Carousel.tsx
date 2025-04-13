import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel as CarouselRoot, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function Carousel() {
	return (
		<CarouselRoot className='w-full max-w-sm'>
			<CarouselContent className='-ml-1'>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/3'>
						<div className='p-1'>
							<Card className='overflow-hidden p-0 duration-300 hover:brightness-75'>
								<CardContent className='h-40 overflow-hidden p-0'>
									{index === 0 && (
										<img
											className='h-full w-full object-cover'
											src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnRu_VuZXHboJQooGw8rKzsSFeBVPEofbFA&s'
											alt=''
										/>
									)}
									{index === 1 && (
										<img
											className='h-full w-full object-cover'
											src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqxu_yW4aXh4uvefR-eTxFY_aO9FGbP5jSw&s'
											alt=''
										/>
									)}
									{index === 2 && <img className='h-full w-full object-cover' src='https://media.tacdn.com/media/attractions-splice-spp-720x480/10/4a/3d/d9.jpg' alt='' />}
									{index === 3 && (
										<img
											className='h-full w-full object-cover'
											src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4u1rQRtEfCzT02Il7se2LAxybfYphcLc8w&s'
											alt=''
										/>
									)}
									{index === 4 && (
										<img
											className='h-full w-full object-cover'
											src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6v6f0RrW4GYe0TugMHSk8LRrIvcBchL0_OIoqfsBOn2KKKKi_PRuiiMFAQ3W7XZ2m0c&usqp=CAU'
											alt=''
										/>
									)}
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</CarouselRoot>
	);
}
