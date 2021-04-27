const Footer = () => {
	return (
		<footer className="flex flex-col mt-8 items-center md:items-center lg:items-stretch xl:items-stretch w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-700">
			<div className="px-8 py-3 ">
				<p>India</p>
			</div>
			<div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between text-sm text-gray-700">
				<div className="hidden space-x-4 px-8 py-3 lg:flex xl:flex">
					<div className="link">About</div>
					<div className="link">Advertising</div>
					<div className="link">Business</div>
					<div className="link">How Search Works</div>
				</div>
				<div className="px-8 py-3 ">
					Designed By{" "}
					<a
						href="https://nikunjthesiyajs.netlify.app/"
						target="_blank"
						className="text-blue-500"
					>
						Nikunj Thesiya
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
