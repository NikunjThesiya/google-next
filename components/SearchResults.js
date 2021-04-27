import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
	return (
		<div className="mx-auto w-full">
			<p className="text-gray-600 text-md mb-5 mt-3 text-xs sm:text-sm px-7 sm:pl-[5%] md:pl-[14%] lg:pl-44">
				About {results.searchInformation?.formattedTotalResults} Results (
				{results.searchInformation?.formattedSearchTime} Seconds)
			</p>

			{results.items?.map((result) => (
				<div
					key={result.link}
					className=" mb-2 overflow-hidden sm:overflow-visible bg-gray-100 sm:bg-white w-full sm:w-2/3 px-7 sm:pl-[5%] md:pl-[14%] lg:pl-44 py-4"
				>
					<div className="group">
						<a href={result.link} className="text-xs truncate">
							{result.formattedUrl}
						</a>
						<a href={result.link} className="">
							<h2 className="truncate text-lg sm:text-xl text-blue-800 font-medium group-hover:underline">
								{result.title}
							</h2>
						</a>
					</div>
					<p className="line-clamp-3 sm:line-clamp-2 lg:line-clamp-3 text-sm text-gray-700">
						{result.snippet}
					</p>
				</div>
			))}
			<PaginationButtons />
		</div>
	);
}

export default SearchResults;
