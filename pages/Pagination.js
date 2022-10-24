import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) {
  return (
    <div className="py-2 text-center" style={{ marginTop: "-70px" }}>
      <div className="hidden">
        <p className="text-sm text-gray-700">
          Showing{" "}
          <span className="font-medium">{currentPage * postsPerPage - 5}</span>{" "}
          to
          <span className="font-medium"> {currentPage * postsPerPage} </span> of
          <span className="font-medium"> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav className="relative z-0 inline-flex" aria-label="Pagination">
          <a
            onClick={() => {
              paginateBack();
            }}
            href="#"
            className=" mr-10 relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <ChevronLeftIcon className="h-3 w-3 mr-2" aria-hidden="true" />
            <span>Previous</span>
          </a>

          <a
            onClick={() => {
              paginateFront();
            }}
            href="#"
            className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Next</span>
            <ChevronRightIcon className="h-3 w-3 ml-2" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  );
}
