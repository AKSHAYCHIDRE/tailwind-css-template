import React from 'react';

const Footer = () => (
  	<footer className="mx-auto text-gray-100 footer-wrap">
		<div className="container">
			<div className="flex text-white justify-around pt-16 pb-10 ">
				<div className="">
					<h4 className="text-xl font-semibold mb-3">About Softwill</h4>
					<p className="text-sm">We're passionate about offering some <br/> of the best business growth services.</p>
				</div>
				<div className="">
					<h4 className="text-xl mb-3">Social Media</h4>
					<ul className="leading-loose flex gap-4">
						<li>
							<a href="https://www.facebook.com/" className="hover:no-underline" target="_blank" >
								<i className="fa fa-facebook flex items-center justify-center h-10 w-10 rounded-full fab fill-current text-white text-xl bg-teal-400 hover:bg-teal-300"></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/" className="hover:no-underline" target="_blank">
								<i className="fa fa-instagram flex items-center justify-center h-10 w-10 rounded-full fab fill-current text-white text-xl bg-teal-400 hover:bg-teal-300"></i>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/" className="hover:no-underline" target="_blank">
								<i className="fa fa-linkedin flex items-center justify-center h-10 w-10 rounded-full fab fill-current text-white text-xl bg-teal-400 hover:bg-teal-300"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="copywrite text-center py-4 border-gray-600 border-t text-gray-500">
				<p className="mb-0 text-sm ">Copyright © 2021 <a href="#" className="company-name text-sm text-gray-500 hover:text-white hover:no-underline">Softwill</a> - All rights reserved</p>
			</div>
		</div>
  </footer>
);

export default Footer;