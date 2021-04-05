import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';

const Header = () => (
	<header className="sticky top-0 bg-white shadow z-40">
		<div className="container flex flex-col sm:flex-row justify-between items-center mx-auto pb-2 px-8">
			<div className="flex items-center text-2xl">
				{/* <div className="w-12 mr-3">
				<LogoIcon />
				</div> */}
				<a href="#" className="tracking-widest text-teal-400 hover:text-teal-400 hover:no-underline">Logo</a>
			</div>
			<div className="flex mt-3 mb-3 sm:mt-0">
				<AnchorLink className="px-4 text-gray-800 hover:text-teal-400 hover:no-underline" href="#home">
					Home
				</AnchorLink>
				<AnchorLink className="px-4 text-gray-800 hover:text-teal-400 hover:no-underline" href="#services">
					Services
				</AnchorLink>
				<AnchorLink className="px-4 text-gray-800 hover:text-teal-400 hover:no-underline" href="#career">
					Career
				</AnchorLink>
				<AnchorLink className="px-4 text-gray-800 hover:text-teal-400 hover:no-underline" href="#contact">
					Contact Us
				</AnchorLink>
			</div>
		</div>
	</header>
	);

export default Header;
