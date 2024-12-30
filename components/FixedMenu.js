import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { useMediaQuery } from 'react-responsive';
import { FiMaPin, FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';

// compponents
import Nav from './Nav';
import Socials from './Socials';

const FixedMenu = () => {
	const [showMenuButton, setShowMenuButton] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	const isMobile = useMediaQuery({
		query: '(max-width:640px)',
	});

	// check if the component is mounted to prevent SSR inismatches
	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (isMounted) {
			const handleScroll = () => {
				setShowMenuButton(window.scrollY > 150); //show the button after scrolling 250px
			};

			if (!isMobile) {
				window.addEventListener('scroll', handleScroll);
				return () => window.removeEventListener('scroll', handleScroll);
			} else {
				// always show the button on mobile
				setShowMenuButton(true);
			}
		}
	}, [isMobile, isMounted]);

	// prevent rendering untul mounted
	if (!isMounted) return null;

	return (
		<div className="fixed w-full h-[480px] z-50 flex justify-center pointer-events-none bg-transparent">
			{/* menu */}
			<AnimatePresence>
				{showMenu && showMenuButton && (
					<motion.div className="relative w-full max-w-md md:max-w-none h-[400px] bottom-[28rem] xl:bottom-[21.2rem] px-4 pointer-events-auto">
						<div className="bg-white w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg">
							<Nav
								containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left"
								listStyles="flex flex-col justify-center gap-4"
								linkStyles="font-primary text-4xl text-primary cursor-pointer"
								spy={true}
							/>
							{/* info */}
							<div className="hidden md:flex mx-auto">
								<div >
									<div className="flex gap-12 mb-12">
										{/* location */}
										<div className="flex flex-col">
											<div className="text-[28px] text-accent mb-2">
												<FiMapPin />
											</div>
											<p className="font-semibold text-primary text-lg">Location</p>
											<p>Surabaya, Indonesia</p>
										</div>
										{/* phone */}
										<div className="flex flex-col">
											<div className="text-[28px] text-accent mb-2">
												<FiPhoneCall />
											</div>
											<p className="font-semibold text-primary text-lg">Phone</p>
											<p>+62 817 7673 0642</p>
										</div>
										{/* email */}
										<div className="flex flex-col">
											<div className="text-[28px] text-accent mb-2">
												<FiMail />
											</div>
											<p className="font-semibold text-primary text-lg">Email</p>
											<p>zakymaulana363@gmail.com</p>
										</div>
									</div>
									{/* socials */}
                  <Socials containerStyles="flex gap-2" iconStyles="text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full"/>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			{/* menu Button */}
			{/* render Button without animations on mobile */}
			{isMobile ? (
				<div className="fixed z-50 bottom-16">
					<button onClick={() => setShowMenu(!showMenu)} className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto">
						<CgMenuGridR className="text-4xl text-white" />
					</button>
				</div>
			) : (
				<AnimatePresence>
					{showMenuButton && (
						<motion.div
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 100, opacity: 0 }}
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 40,
							}}
							className="fixed z-50 bottom-16 pointer-events-auto"
						>
							<button onClick={() => setShowMenu(!showMenu)} className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none">
								<CgMenuGridR className="text-4xl text-white" />
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</div>
	);
};

export default FixedMenu;
