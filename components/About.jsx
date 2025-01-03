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
							{/* image */}
							<div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
								<Image src="/assets/about/me.png" width={350} height={478} quality={100} priority alt="me" />
							</div>
							{/* rotating shape */}
							<div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
								<motion.div
									animate={{ rotate: [0, 360] }}
									transition={{
										duration: 10,
										ease: 'linear',
										repeat: Infinity,
									}}
								>
									<Image src="/assets/about/star.svg" width={160} height={160} alt="star" />
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
// 1.48.40
