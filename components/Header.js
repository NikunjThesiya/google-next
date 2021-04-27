import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
	const router = useRouter();
	const searchInputRef = useRef(null);
	const search = (e) => {
		e.preventDefault();

		const term = searchInputRef.current.value;
		if (!term) return;

		router.push(`/search?term=${term}`);
	};
	return (
		<header className="sticky top-0 bg-white ">
			<div className="flex w-full p-4 sm:p-6 items-center">
				<Image
					src="/google-min.png"
					height={33}
					width={92}
					onClick={() => router.push("/")}
					className="cursor-pointer"
				/>

				<form className="flex flex-grow px-4 sm:px-6 py-1.5 sm:py-2 ml-5 sm:ml-10 mr-5 border border-gray-200 rounded-full shadow-sm sm:shadow-md max-w-3xl items-center">
					<input
						type="text"
						ref={searchInputRef}
						className="flex-grow w-full focus:outline-none text-xs sm:text-sm"
					/>
					<XIcon
						className="h-4 sm:h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
						onClick={() => (searchInputRef.current.value = "")}
					/>
					<MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-400 cursor-pointer" />
					<SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
					<button hidden type="submit" onClick={search}>
						Search
					</button>
				</form>
				<Avatar url="/nik.jpg" className="ml-auto" />
			</div>
			<HeaderOptions />
		</header>
	);
}

export default Header;
