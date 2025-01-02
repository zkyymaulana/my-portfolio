import Image from 'next/image';
import { motion } from 'framer-motion';
// components
import AnimatedText from './AnimatedText';

const About = () => {
	return (
		<section className="relative pt-12 pb-24" id="about">
			<div className="container mx-auto h-full">
				<div className="h-full flex items-center justify-center">
					<div className="hidden xl:flex flex-1 pl-8">
						<div className="relative w-full max-w-[380px]">
							{/* shape */}
							<div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
// 1.48.40
