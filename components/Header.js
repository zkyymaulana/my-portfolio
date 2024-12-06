'use client';
import { Link as ScrollLink } from 'react-scroll';
// components
import Logo from './Logo';
import Nav from './Nav';

function Header() {
	return (
		<header className="w-full absolute py-8 xl:py-[48px] z-30">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
					{/* logo */}
					<Logo />
					<div className="flex items-center gap-12">
						{/* nav & socials */}
						<Nav containerStyles="hidden xl:flex" listStyles="flex gap-6" linkStyles="text-primary font-primary text-lg tracking-[1.4px] transition-all duration-300 cursor-pointer" />
					</div>
					<div>socials</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
