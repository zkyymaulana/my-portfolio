'use client';

import Image from 'next/image';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

// components
import RotatingShape from './RotatingShape';
import Header from './Header';
import Stats from './Stats/Stats';

function Hero() {
	return (
		<section className="h-[800px] relative bg-accent/10 xl:bg-white" id="home">
			{/* Header */}
			<Header />
			<div className="container mx-auto h-full">
				<div className="relative z-20 h-full w-full xl:max-w-3xl flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
					<h1 className="h1 mb-2 max-w-xs xl:max-w-none">
						<span className="text-accent">I Build And</span> Design Powerfull
						<TypeAnimation preRenderFirstString={true} sequence={['Websites', 2000, 'Interfaces', 2000]} speed={50} repeat={Infinity} wrapper="span" cursor={false} className="ml-2 xl:ml-4" />
					</h1>
					<p className="lead max-w-lg mb-7">I'm M. Zaky Maulana, a passionate fullstack web developer. Based in Surabaya, Indonesia</p>
					<ScrollLink to="contact" smooth>
						<button className="btn btn-accent mb-8">Contact me</button>
					</ScrollLink>
					{/* Stats */}
					<Stats />
				</div>
				{/* Image */}
				<div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
					<div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[8vw]">
						<Image src="/assets/Profilen.png" alt="me" fill quality="100" priority className="object-contain"></Image>
					</div>
					<div className="hidden xl:flex absolute top-44 left-[6vw]">
						<Image src="/assets/arrow.svg" alt="arrow" width={160} height={160} />
					</div>
					{/* Shae 1 */}
					<div className="absolute top-[640px] left-[10vw]">
						<RotatingShape content={<Image src="/assets/shape-1.svg" width={38} height={38} alt="shape-1" />} direction={'left'} duration={6} />
					</div>
					{/* Shae 2 */}
					<div className="absolute top-[260px] xl:left-[34vw]">
						<RotatingShape content={<Image src="/assets/shape-2.svg" width={28} height={28} alt="shape-2" />} direction={'right'} duration={5} />
					</div>
					{/* Shae 3 */}
					<div className="absolute top-[560px] xl:left-[48vw]">
						<RotatingShape content={<Image src="/assets/shape-3.svg" width={36} height={36} alt="shape-1" />} direction={'left'} duration={7} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
