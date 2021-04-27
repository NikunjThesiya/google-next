import Head from "next/head";
import { useRouter } from "next/router";
import Avatar from "../components/Avatar";
import Image from "next/image";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";

export default function Home() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
		console.log(term);
	};
	return (
		<div className="flex flex-col items-center justify-between h-screen">
			<Head>
				<title>Google | Nikunj Thesiya</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<header className="flex w-full p-5 justify-between text-sm text-gray-700">
				{/* Left */}
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>
				{/* Right */}
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>

					{/* Icon */}
					<ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
					{/* Avatar */}
					<Avatar url="/nik.jpg" />
				</div>
			</header>

			{/* Body */}
			<form className="flex flex-col items-center my-8 mx-10 w-4/5">
				<img
					src="/google-max.gif"
					className="w-48 sm:w-56 md:w-56 lg:w-96 xl:w-96"
				/>
				<div className="flex w-full mt-7 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
					<SearchIcon className="h-5 text-gray-500 mr-3" />
					<input
						type="text"
						ref={searchInputRef}
						className="flex-grow focus:outline-none"
					/>
					<MicrophoneIcon className="h-5 text-gray-500 ml-3" />
				</div>
				<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
					<button onClick={search} className="btn">
						Google Search
					</button>
					<button onClick={search} className="btn">
						I'm Feeling Lucky
					</button>
				</div>
			</form>
			{/* Footer */}
			<Footer />
		</div>
	);
}
