'use client';

import Hero from '@/components/Hero';
import React, { useEffect } from 'react';
import Services from '@/components/Services';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

const Home = () => {
	// implement locomotive scroll
	useEffect(() => {
		const loadLocomotiveScroll = async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			new LocomotiveScroll();
		};
		loadLocomotiveScroll();
	}, []);

	return (
		<div>
			<Hero />
			<Services />
			<About />
			<Journey />
			<Work />
			<Contact />
			{/* temporary div */}
			<div className="h-[3000px]"></div>
		</div>
	);
};

export default Home;
