import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

function PaginationButtons() {
	const router = useRouter();
	const startIndex = Number(router.query.start) || 0;
	return (
		<div className="flex text-xs justify-around sm:justify-start space-x-0 sm:space-x-10 px-7 sm:pl-[5%] md:pl-[14%] lg:pl-44 text-blue-700">
			{startIndex >= 10 && (
				<Link
					href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
				>
					<div className="flex items-center flex-col cursor-pointer hover:underline">
						<ChevronLeftIcon className="h-5 text-blue-700" />
						<p>Previous</p>
					</div>
				</Link>
			)}
			<Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
				<div className="flex items-center flex-col cursor-pointer hover:underline">
					<ChevronRightIcon className="h-5 text-blue-700" />
					<p>Next</p>
				</div>
			</Link>
		</div>
	);
}

export default PaginationButtons;
